import userActionTypes from "../types/user.type"

export const setUser = ({ firstName, lastName, isLoading }) => {
  return {
    type: 'SET_USER',
    payload: { firstName, lastName, isLoading },
  }
}

export const signIn = ({ email, password }) => {
  return {
    type: 'SIGN_IN',
    payload: { email, password },
  }
}

export const setLoading = ({ isLoading }) => {
  return {
    type: 'SET_USER_LOADING',
    payload: { isLoading },
  }
}

export const setError = ({ errorMessage }) => {
  return {
    type: userActionTypes.SET_ERROR,
    payload: { errorMessage },
  }
}