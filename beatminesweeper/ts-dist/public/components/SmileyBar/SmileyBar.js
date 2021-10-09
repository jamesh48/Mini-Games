import React from 'react';
import { useBoardContext } from 'BoardStore';
import { useGlobalContext } from 'GlobalStore';
import './smileystyles.scss';
export default React.memo(() => {
    const [{ dimensions: { numberOfMines }, timerOn }, globalDispatch] = useGlobalContext();
    const [{ surprised, flagsRemaining }, boardDispatch] = useBoardContext();
    const resetCallback = () => {
        boardDispatch({ type: 'RESET SMILES' });
        boardDispatch({ type: 'SET FLAGS REMAINING', payload: numberOfMines });
        globalDispatch({ type: 'SWITCH TIMER OFF' });
    };
    return (React.createElement("div", { id: 'smiley-bar' },
        React.createElement("div", { className: 'smiley-guy', id: surprised === 'dead' ? 'dead-guy'
                : timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' ? 'victory-guy'
                    : surprised === true ? 'surprised-guy'
                        : 'smiley-guy', onClick: resetCallback }),
        React.createElement("div", { id: 'flags-remaining' }, flagsRemaining)));
});
//# sourceMappingURL=SmileyBar.js.map