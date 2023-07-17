import { useSelector } from "react-redux"
import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Initial Notification'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      return action.payload
    }
  }
})

export const setNotificationThunk = (message, time) => {
  return (dispatch) => {
    dispatch(notificationSlice.actions.setMessage(message))
    setTimeout(() => {
      dispatch(notificationSlice.actions.setMessage(''))
    }, time * 1000)
  }
}
export default notificationSlice

