import { createSlice } from '@reduxjs/toolkit'
import { getAllAnecdotes } from '../services/anecdotesService'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const initialState = []//anecdotesAtStart.map(asObject)

export const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteForAnecdote(state, action) {
      const aToChange = state.find(n => n.id === action.payload)
      const changed = {
        ...aToChange,
        votes: aToChange.votes + 1
      }
      return state.map(a => a.id === action.payload ? changed : a)
    },
    addNewAnecdote(state, action) {
      return state.concat({ content: action.payload, id: getId(), votes: 0 })
    },
    setAnecdotes(state, action) {
      console.log("payload")
      console.log(action.payload)
      return action.payload
    }
  }
})

export const initializeAnecdote = () => {
  return async dispatch => {
    const data = await getAllAnecdotes();
    dispatch(anecdoteSlice.actions.setAnecdotes(data));
  }
}
