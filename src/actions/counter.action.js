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