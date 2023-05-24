const initialState = {
  userObj: {},
  loggedIn: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === "LOGIN-SUCCESS") {
    return {
      ...state,
      userObj: action.payload,
      loggedIn: true,
    };
  }
  return {
    ...state,
  };
}

export default rootReducer;
