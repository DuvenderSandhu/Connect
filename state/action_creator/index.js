
export const tokenChange = (token) => {
  return (dispatch) => {
    dispatch({
      type: 'setToken',
      payload: token
    })
  }
}

export const chatUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: 'setchatUser',
      payload: user
    })
  }
}

export const showWarning = (status) => {
  return (dispatch) => {
    dispatch({
      type: 'showWarning',
      payload: status
    })
  }
}

export const showError = (status) => {
  return (dispatch) => {
    dispatch({
      type: 'showError',
      payload: status
    })
  }
}

export const showSuccess = (status) => {
  return (dispatch) => {
    dispatch({
      type: 'showSuccess',
      payload: status
    })
  }
}

