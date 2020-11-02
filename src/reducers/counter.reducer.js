const initState = {
  count: 0,
  isLoading: false,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default counterReducer;