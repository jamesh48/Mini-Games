

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

const userName = (state = '', { type, payload }) => {
  switch (type) {
    case "UPDATE USERNAME":
      return payload;
    default:
      return state;
  };
};

const userPass = (state = '', { type, payload }) => {
  switch (type) {
    case "UPDATE USERPASS":
      return payload;
    default:
      return state;
  };
};



export default combineReducers({ userName, userPass });
