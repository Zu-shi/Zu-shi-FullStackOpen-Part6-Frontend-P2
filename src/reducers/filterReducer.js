import { useSelector, useDispatch } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload
    }
  }
})

/*
export const setFilter = (filter) => {
  console.log("Input in SetFilter: ", filter)
  return {
    type: "SET",
    payload: { filter }
  }
}

export const filterReducer = (state = initialState, action) => {
  console.log("Filter: ", state)
  console.log("Action in filterReducer: ", action)

  switch (action.type) {
    case ("SET"): {
      state = action.payload.filter
      return state
    }
    default: {
      return state;
    }
  }
}
*/

export default filterSlice