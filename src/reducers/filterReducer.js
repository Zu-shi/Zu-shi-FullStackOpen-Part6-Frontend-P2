import { useSelector, useDispatch } from 'react-redux'

const initialState = ""

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