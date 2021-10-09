import React from 'react';
import { useGlobalContext } from 'GlobalStore';
import './skillstyles.scss';
export default React.memo(() => {
    const [{ dimensions: { skillLevel } }, globalDispatch] = useGlobalContext();
    return (React.createElement("div", { className: skillLevel, id: 'skill-level-selector' },
        React.createElement("button", { onClick: _ => globalDispatch({ type: 'SET BEGINNER DIMENSIONS' }) }, "Beginner"),
        React.createElement("button", { onClick: _ => globalDispatch({ type: 'SET INTERMEDIATE DIMENSIONS' }) }, "Intermediate"),
        React.createElement("button", { onClick: _ => globalDispatch({ type: 'SET ADVANCED DIMENSIONS' }) }, "Expert")));
});
//# sourceMappingURL=SkillLevelSelector.js.map