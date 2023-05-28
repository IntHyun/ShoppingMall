import { combineReducers } from "redux";

const initialState = {
  userType: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TYPE":
      return {
        ...state,
        userType: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
