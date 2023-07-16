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

export default notificationSlice

