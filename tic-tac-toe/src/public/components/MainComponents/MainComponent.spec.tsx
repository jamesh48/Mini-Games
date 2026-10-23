import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';
import TicTacToe from 'Components/TicTacToe';
import { createFakeServer } from '../../testUtils/fakeSocket';

const play = (wrapper: ReactWrapper, ...boxes: number[]) => {
  boxes.forEach((box) => wrapper.find(`button#box-${box}`).simulate('click'));
};

const status = (wrapper: ReactWrapper) => wrapper.find('div#game-status').text();

const mountConnected = (server: ReturnType<typeof createFakeServer>) => {
  const wrapper = mount(<TicTacToe createSocket={server.createSocket} />);
  act(() => server.connect());
  wrapper.update();
  return wrapper;
};

describe('Main Component', () => {
  it('waits for the server before the board can be played', () => {
    const wrapper = mount(<TicTacToe createSocket={createFakeServer().createSocket} />);
    expect(status(wrapper)).toContain('Connecting');
    expect(wrapper.find('button#box-0').prop('disabled')).toBe(true);
  });

  it('renders the board and scoreboard once connected', () => {
    const wrapper = mountConnected(createFakeServer());
    expect(wrapper.find('button.boxes').length).toEqual(9);
    expect(status(wrapper)).toContain("Player X's turn");
  });

  it('announces the winner, keeps the score and starts the next round', () => {
    const wrapper = mountConnected(createFakeServer());
    play(wrapper, 0, 3, 1, 4, 2);

    expect(status(wrapper)).toContain('Player X wins the round!');
    expect(wrapper.find('#p-x-tally').last().text()).toEqual('1');
    expect(wrapper.find('button#box-8').prop('disabled')).toBe(true);

    wrapper.find('button#new-game-button').simulate('click');
    expect(status(wrapper)).toContain("Player O's turn");
    expect(wrapper.find('#p-x-tally').last().text()).toEqual('1');
  });

  it('renames a player from their card', () => {
    const wrapper = mountConnected(createFakeServer());
    wrapper.find('button[aria-label="Edit name for player X"]').simulate('click');
    wrapper.find('input#p-x-name').simulate('change', { target: { value: 'Ada' } });
    wrapper.find('input#p-x-name').simulate('keydown', { key: 'Enter' });

    expect(status(wrapper)).toContain("Ada's turn");
    expect(wrapper.find('div#player-headers').text()).toContain('Ada');
  });

  it('shows the online switch only to the host and sends it to the server', () => {
    const server = createFakeServer();
    const wrapper = mountConnected(server);
    wrapper.find('input#online-switch').simulate('change', { target: { checked: true } });
    expect(server.sent).toContainEqual({ event: 'setOnline', data: { on: true } });

    expect(mountConnected(createFakeServer({ isHost: false })).find('input#online-switch').length).toEqual(0);
  });

  it('shows the host the invite link until an opponent joins', () => {
    const tunnel = { status: 'ready' as const, url: 'https://tic-tac.trycloudflare.com' };
    const server = createFakeServer({ seat: 'X', online: true, tunnel, players: { X: true, O: false } });
    const wrapper = mountConnected(server);
    expect(status(wrapper)).toContain('Send them this link');
    expect(wrapper.find('div.invite-link').text()).toContain('tic-tac.trycloudflare.com');

    act(() => server.send('players', { X: true, O: true }));
    wrapper.update();
    expect(status(wrapper)).toContain('Your turn');
    expect(wrapper.find('button#show-link-button').length).toEqual(1);
  });

  it("only lets an online player move on their own turn", () => {
    const server = createFakeServer({ seat: 'O', isHost: false, online: true, players: { X: true, O: true } });
    const wrapper = mountConnected(server);
    expect(status(wrapper)).toContain('Waiting for Player X');
    expect(wrapper.find('button#box-0').prop('disabled')).toBe(true);
    expect(wrapper.find('div#p-o-header').text()).toContain('you');
  });

  it('turns away other devices while online play is off', () => {
    const server = createFakeServer({ isHost: false });
    const wrapper = mount(<TicTacToe createSocket={server.createSocket} />);
    act(() => server.send('rejected'));
    wrapper.update();
    expect(wrapper.find('#rejected').first().text()).toContain('Online play is off');
    expect(wrapper.find('div#board').length).toEqual(0);
  });
});
