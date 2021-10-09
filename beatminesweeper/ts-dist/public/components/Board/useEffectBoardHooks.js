import React from "react";
const generateMinesEffect = (dimensions, boardDispatch) => {
    React.useEffect(() => {
        boardDispatch({ type: "GENERATE MINES", payload: dimensions });
    }, []);
};
const stopColorIterationEffect = (colorDelay, boardDispatch) => {
    React.useEffect(() => {
        if (colorDelay === null) {
            boardDispatch({ type: "STOP COLOR ITERATION" });
        }
        else {
            boardDispatch({ type: "START COLOR ITERATION" });
        }
    }, [colorDelay]);
};
const freezeColorDelayEffect = (definedUserName, boardDispatch) => {
    React.useEffect(() => {
        if (definedUserName) {
            boardDispatch({ type: "UNSET COLOR DELAY" });
        }
        else {
            boardDispatch({ type: "SET COLOR DELAY" });
        }
    }, [definedUserName]);
};
const resetGameEffectOnSmileyOrSkill = (timerOn, dimensions, boardDispatch) => {
    React.useEffect(() => {
        if (timerOn === false) {
            boardDispatch({
                type: "RESET FLIPPERS",
                payload: Array.from({
                    length: dimensions.horizontalDimension * dimensions.verticalDimension,
                }, () => false),
            });
            boardDispatch({ type: "GENERATE MINES", payload: dimensions });
        }
    }, [timerOn, dimensions]);
};
const freezeScrollBoardEffect = (scrollBoard) => {
    const preventDefault = (ev) => {
        ev = ev || window.event;
        if (ev.preventDefault)
            ev.preventDefault();
        return false;
    };
    React.useEffect(() => {
        if (scrollBoard)
            document.addEventListener("wheel", preventDefault, { passive: false });
        return () => document.removeEventListener("wheel", preventDefault, false);
    }, [scrollBoard]);
};
const revealFlipperEffect = (args) => {
    const { mineArr, flippers, numbers, globalDispatch, boardDispatch } = args;
    React.useEffect(() => {
        if (mineArr.length && flippers.length && flippers[0] !== "dead") {
            if (flippers.every((flipper) => {
                if (typeof flipper === "number") {
                    return mineArr[flipper];
                }
                else {
                    return flipper === true || flipper === "flag";
                }
            })) {
                globalDispatch({ type: "FREEZE TIMER STATE VICTORY" });
            }
            else if (Object.keys(numbers).length &&
                Object.keys(numbers).every((num) => flippers[num] === true)) {
                boardDispatch({ type: "REVEAL FLIPPERS", payload: { mineArr } });
            }
        }
    }, [flippers]);
};
const generateNumberEffect = (mineArr, { verticalDimension, horizontalDimension }, boardDispatch) => {
    React.useEffect(() => {
        boardDispatch({
            type: "GENERATE NUMBERS",
            payload: { mineArr, verticalDimension, horizontalDimension },
        });
    }, [mineArr]);
};
const resetOnSkillLevelChangeEffect = (skillLevel, globalDispatch) => {
    React.useEffect(() => {
        globalDispatch({ type: "SWITCH TIMER OFF" });
    }, [skillLevel]);
};
const resetFlagsRemainingOnSkillChangeOrTimerOn = (timerOn, skillLevel, boardDispatch) => {
    React.useEffect(() => {
        if (timerOn === false) {
            boardDispatch({
                type: "SET FLAGS REMAINING",
                payload: skillLevel === "beginner"
                    ? 10
                    : skillLevel === "intermediate"
                        ? 40
                        : 99,
            });
        }
    }, [skillLevel, timerOn]);
};
export default {
    generateMinesEffect,
    stopColorIterationEffect,
    freezeColorDelayEffect,
    resetGameEffectOnSmileyOrSkill,
    freezeScrollBoardEffect,
    revealFlipperEffect,
    generateNumberEffect,
    resetOnSkillLevelChangeEffect,
    resetFlagsRemainingOnSkillChangeOrTimerOn,
};
//# sourceMappingURL=useEffectBoardHooks.js.map