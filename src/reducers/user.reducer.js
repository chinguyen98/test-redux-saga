const initState = {
  firstName: null,
  lastName: null,
  isLoading: false,
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
      }
    }
    case 'SET_USER_LOADING': {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;