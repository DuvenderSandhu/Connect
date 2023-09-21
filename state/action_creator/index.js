
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