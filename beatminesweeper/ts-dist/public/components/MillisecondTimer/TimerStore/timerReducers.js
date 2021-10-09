const timerTime = (state = 0, action) => {
    switch (action.type) {
        case "ITERATE TIMER TIME":
            return (state += action.payload);
        case "CLEAR TIMER TIME":
            return 0;
        default:
            return state;
    }
};
const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => (Object.assign(Object.assign({}, acc), { [prop]: slices[prop](acc[prop], action) })), state);
export default combineReducers({ timerTime });
//# sourceMappingURL=timerReducers.js.map