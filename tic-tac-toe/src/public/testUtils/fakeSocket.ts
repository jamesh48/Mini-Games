import type { Socket } from 'socket.io-client';
import { gameReducer, initialState } from 'Components/GameStore/gameReducers';
import type { GameState, Mark, Seat, TunnelState } from 'Components/GameStore/types';

type Handler = (data?: unknown) => void;

interface FakeServerOptions {
  seat?: Seat;
  isHost?: boolean;
  online?: boolean;
  tunnel?: TunnelState;
  players?: Record<Mark, boolean>;
  game?: GameState;
}

// Stands in for the server: applies actions with the real reducer and sends the state back
export const createFakeServer = ({
  seat = 'both',
  isHost = true,
  online = false,
  tunnel = { status: 'off' },
  players = { X: false, O: false },
  game: startingGame = initialState
}: FakeServerOptions = {}) => {
  let game = startingGame;
  const handlers: Record<string, Handler[]> = {};
  const sent: Array<{ event: string; data: unknown }> = [];

  const send = (event: string, data?: unknown) => (handlers[event] || []).forEach((handler) => handler(data));

  const socket = {
    on(event: string, handler: Handler) {
      (handlers[event] = handlers[event] || []).push(handler);
      return socket;
    },
    emit(event: string, data: unknown) {
      sent.push({ event, data });
      if (event === 'action') {
        game = gameReducer(game, data as Parameters<typeof gameReducer>[1]);
        send('state', game);
      }
      return socket;
    },
    disconnect() {}
  };

  const connect = () => {
    send('connect');
    send('welcome', { seat, isHost, game });
    send('players', players);
    send('mode', { online, tunnel });
  };

  return { createSocket: () => socket as unknown as Socket, connect, send, sent };
};
