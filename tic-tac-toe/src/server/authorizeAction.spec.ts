import { initialState } from 'Components/GameStore/gameReducers';
import { authorizeAction } from './authorizeAction';

describe('authorizeAction', () => {
  it('lets single-device play move for either player', () => {
    expect(authorizeAction('both', initialState, { type: 'PLAY MOVE', index: 4 })).toEqual({ type: 'PLAY MOVE', index: 4 });
    expect(authorizeAction('both', { ...initialState, currentPlayer: 'O' }, { type: 'PLAY MOVE', index: 4 })).not.toBeNull();
  });

  it('only lets online players move on their own turn', () => {
    expect(authorizeAction('X', initialState, { type: 'PLAY MOVE', index: 4 })).not.toBeNull();
    expect(authorizeAction('O', initialState, { type: 'PLAY MOVE', index: 4 })).toBeNull();
  });

  it('rejects spectators, unseated browsers and malformed actions', () => {
    expect(authorizeAction('spectator', initialState, { type: 'NEW ROUND' })).toBeNull();
    expect(authorizeAction(undefined, initialState, { type: 'NEW ROUND' })).toBeNull();
    expect(authorizeAction('both', initialState, null)).toBeNull();
    expect(authorizeAction('both', initialState, { type: 'PLAY MOVE', index: 9 })).toBeNull();
    expect(authorizeAction('both', initialState, { type: 'PLAY MOVE', index: '4' })).toBeNull();
    expect(authorizeAction('both', initialState, { type: 'DELETE EVERYTHING' })).toBeNull();
  });

  it('only lets online players rename themselves, and trims names', () => {
    expect(authorizeAction('O', initialState, { type: 'SET PLAYER NAME', mark: 'X', name: '  Linus  ' }))
      .toEqual({ type: 'SET PLAYER NAME', mark: 'O', name: 'Linus' });
    expect(authorizeAction('both', initialState, { type: 'SET PLAYER NAME', mark: 'X', name: 'a'.repeat(30) }))
      .toEqual({ type: 'SET PLAYER NAME', mark: 'X', name: 'a'.repeat(20) });
    expect(authorizeAction('both', initialState, { type: 'SET PLAYER NAME', mark: 'Z', name: 'Ada' })).toBeNull();
  });
});
