import userActionTypes from "../types/user.type";

const initState = {
  firstName: null,
  lastName: null,
  isLoading: false,
  error: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      const { firstName, lastName, isLoading } = action.payload;
      return {
        ...state,
        firstName,
        lastName,
        isLoading,
        error: null,
      }
    }
    case 'SET_USER_LOADING': {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      }
    }
    case userActionTypes.SET_ERROR: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        error: errorMessage,
        isLoading: false,
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;