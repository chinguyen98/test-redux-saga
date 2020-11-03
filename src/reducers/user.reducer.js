const initState = {
  firstName: null,
  lastName: null,
  isLoading: false,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isLoading: false,
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;