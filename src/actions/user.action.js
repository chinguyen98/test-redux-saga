export const setUser = ({ firstName, lastName }) => {
  return {
    type: 'SET_USER',
    payload: { firstName, lastName },
  }
}

export const signIn = ({ email, password }) => {
  return {
    type: 'SIGN_IN',
    payload: { email, password },
  }
}