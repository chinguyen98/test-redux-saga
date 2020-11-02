export const incrementCounter = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrementCounter = () => {
  return {
    type: 'DECREMENT',
  }
}

export const asyncIncrementCounter = () => {
  return {
    type: 'INCREMENT_ASYNC',
  }
}

export const setLoading = (loadingStatus) => {
  return {
    type: 'SET_LOADING',
    payload: loadingStatus,
  }
}