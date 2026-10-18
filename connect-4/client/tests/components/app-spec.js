import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from '../../staging/App.js';
import createFakeSocket from '../fake-socket.js';

const render = () => {
  const socket = createFakeSocket();
  const wrapper = mount(<App createSocket={() => socket} />);
  return { socket, wrapper };
};

const clickColumn = (wrapper, column) => wrapper.update().find(`[id="${column}"]`).hostNodes().simulate('click');

describe('Online play', () => {
  it('sends the move to the server when it is your turn', () => {
    const { socket, wrapper } = render();
    socket.fire('welcome', { color: 'red', moves: [] });
    clickColumn(wrapper, 4);
    expect(socket.emit.calledWith('move', { column: 4 })).to.equal(true);
  });

  it('does not send a move when it is the other player\'s turn', () => {
    const { socket, wrapper } = render();
    socket.fire('welcome', { color: 'yellow', moves: [] });
    clickColumn(wrapper, 4);
    expect(socket.emit.calledWith('move')).to.equal(false);
  });

  it('does not let spectators move', () => {
    const { socket, wrapper } = render();
    socket.fire('welcome', { color: 'spectator', moves: [] });
    clickColumn(wrapper, 4);
    expect(socket.emit.calledWith('move')).to.equal(false);
  });

  it('replays the existing moves when joining', () => {
    const { socket, wrapper } = render();
    socket.fire('welcome', { color: 'yellow', moves: [4, 4, 1] });
    expect(wrapper.state().t39).to.equal('red');
    expect(wrapper.state().t32).to.equal('yellow');
    expect(wrapper.state().t36).to.equal('red');
  });

  it('clears the board when the server starts a new game', () => {
    const { socket, wrapper } = render();
    socket.fire('welcome', { color: 'red', moves: [4, 5] });
    socket.fire('newGame');
    expect(wrapper.state().t39).to.equal('');
    expect(wrapper.state().t40).to.equal('');
  });

  it('shows player names from the server', () => {
    const { socket, wrapper } = render();
    socket.fire('players', {
      red: { connected: true, name: 'Alice' },
      yellow: { connected: true, name: 'Bob' }
    });
    wrapper.update();
    expect(wrapper.text()).to.contain('Alice');
    expect(wrapper.text()).to.contain('Bob');
  });

  it('lets one browser play both colors when online play is off', () => {
    const { socket, wrapper } = render();
    socket.fire('welcome', { color: 'both', moves: [], isHost: true });
    clickColumn(wrapper, 4);
    socket.fire('move', { column: 4 });
    clickColumn(wrapper, 5);
    expect(socket.emit.calledWith('move', { column: 4 })).to.equal(true);
    expect(socket.emit.calledWith('move', { column: 5 })).to.equal(true);
  });

  it('shows the online toggle only on the host computer', () => {
    const host = render();
    host.socket.fire('connect');
    host.socket.fire('welcome', { color: 'both', moves: [], isHost: true });
    host.wrapper.update().find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
    expect(host.socket.emit.calledWith('setOnline', { on: true })).to.equal(true);

    const guest = render();
    guest.socket.fire('welcome', { color: 'yellow', moves: [], isHost: false });
    expect(guest.wrapper.update().find('input[type="checkbox"]').length).to.equal(0);
  });

  it('shows the tunnel link to the host', () => {
    const { socket, wrapper } = render();
    socket.fire('connect');
    socket.fire('welcome', { color: 'red', moves: [], isHost: true });
    socket.fire('mode', { online: true, tunnel: { status: 'ready', url: 'https://abc.trycloudflare.com' } });
    expect(wrapper.update().text()).to.contain('abc.trycloudflare.com');
  });

  it('tells other devices when online play is off', () => {
    const { socket, wrapper } = render();
    socket.fire('rejected');
    expect(wrapper.update().text()).to.contain('Online play is off');
  });

  it('lets the host dismiss the online link and bring it back', () => {
    const { socket, wrapper } = render();
    socket.fire('connect');
    socket.fire('welcome', { color: 'red', moves: [], isHost: true });
    socket.fire('mode', { online: true, tunnel: { status: 'ready', url: 'https://dismiss.trycloudflare.com' } });
    wrapper.update().find('button[title="Close"]').simulate('click');
    expect(wrapper.update().text()).to.not.contain('dismiss.trycloudflare.com');
    wrapper.find('button[aria-label="Show online link"]').simulate('click');
    expect(wrapper.update().text()).to.contain('dismiss.trycloudflare.com');
  });
});
