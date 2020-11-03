export const getUser = ({ name }) => {
  return {
    type: 'GET_USER',
    payload: { name },
  }
}

export const signIn = ({ email, password }) => {
  return {
    type: 'SIGN_IN',
    payload: { email, password }
  }
}