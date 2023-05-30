const initialState = {
  userObj: {},
  profileInfo: {},
  loggedIn: false,
  postArr: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === "LOGIN-SUCCESS") {
    return {
      ...state,
      userObj: action.payload,
      loggedIn: true,
    };
  }
  if (action.type === "PROFILE-SET") {
    return {
      ...state,
      profileInfo: action.payload,
    };
  }
  if (action.type === "PROFILE-UPDATED") {
    return {
      ...state,
      profileInfo: action.payload,
    };
  }
  if (action.type === "POST-FETCH-SUCCESS") {
    return {
      ...state,
      postArr: action.payload,
    };
  }
  return {
    ...state,
  };
}

export default rootReducer;
