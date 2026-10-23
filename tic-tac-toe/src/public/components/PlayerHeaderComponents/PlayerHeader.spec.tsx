import React from 'react';
import { mount } from 'enzyme';
import { GameStoreProvider, defaultSnapshot } from 'GameStore';
import { createFakeServer } from '../../testUtils/fakeSocket';
import PlayerHeaders from './PlayerHeaders';

describe('Player Headers', () => {
  it('renders a card for each player with default names', () => {
    const wrapper = mount(
      <GameStoreProvider createSocket={createFakeServer().createSocket}>
        <PlayerHeaders />
      </GameStoreProvider>
    );
    expect(wrapper.find('div.player-name-headers').length).toEqual(2);
    expect(wrapper.text()).toContain('Player X');
    expect(wrapper.text()).toContain('Player O');
  });

  it('shows names and scores from the server', () => {
    const game = { ...defaultSnapshot.game, playerNames: { X: 'Ada', O: '' }, scores: { X: 2, O: 1, draws: 3 } };
    const wrapper = mount(
      <GameStoreProvider snapshot={{ ...defaultSnapshot, game }} createSocket={createFakeServer().createSocket}>
        <PlayerHeaders />
      </GameStoreProvider>
    );
    expect(wrapper.text()).toContain('Ada');
    expect(wrapper.text()).toContain('Player O');
    expect(wrapper.find('#p-x-tally').last().text()).toEqual('2');
    expect(wrapper.find('#p-o-tally').last().text()).toEqual('1');
    expect(wrapper.find('#draw-tally').last().text()).toEqual('3');
  });
});
