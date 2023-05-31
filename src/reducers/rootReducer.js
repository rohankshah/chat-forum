const initialState = {
  userObj: {},
  profileInfo: {},
  loggedIn: false,
  postArr: [],
  commentArr: [],
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
  if (action.type === "POST-CREATE-SUCCESS") {
    return {
      ...state,
      postArr: [...state.postArr, action.payload],
    };
  }
  if (action.type === "FETCH-COMMENT-SUCCESS") {
    return {
      ...state,
      commentArr: action.payload,
    };
  }
  if (action.type === "CLEAR-COMMENTS") {
    return {
      ...state,
      commentArr: [],
    };
  }
  if (action.type === "ADD-COMMENT-SUCCESS") {
    return {
      ...state,
      commentArr: [...state.commentArr, action.payload],
    };
  }
  return {
    ...state,
  };
}

export default rootReducer;
