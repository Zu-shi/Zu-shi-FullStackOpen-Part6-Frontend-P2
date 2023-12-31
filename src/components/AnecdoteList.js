import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { anecdoteSlice } from '.././reducers/anecdoteReducer'
import { initializeAnecdoteThunk } from '.././reducers/anecdoteReducer'
import { voteForAnecdoteThunk } from '.././reducers/anecdoteReducer'
import notificationSlice, { setNotificationThunk } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  // useEffect(async () => {
  //   const items = await getAllAnecdotes()
  //   dispatch(anecdoteSlice.actions.setAnecdotes(items))
  // }, [dispatch])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getAllAnecdotes();
  //     return data
  //   }
  //   const data = fetchData().then(data =>
  //     dispatch(anecdoteSlice.actions.setAnecdotes(data)));
  // }, [dispatch])

  useEffect(() => {
    dispatch(initializeAnecdoteThunk());
  }, [dispatch])

  // useEffect(() => {
  //   getAllAnecdotes().then(data => {
  //     console.log("Calling setAnecdotes")
  //     dispatch(anecdoteSlice.actions.setAnecdotes(data))
  //   })
  // }, [dispatch])

  const anecdotes = useSelector(state => {
    console.log(state)
    if (state.filter === '') {
      return state.anecdotes
    }
    else {
      return state.anecdotes.filter(item => item.content.includes(state.filter))
    }
  })

  const vote = (anecdote) => {
    console.log(anecdote)
    dispatch(voteForAnecdoteThunk(anecdote))
    console.log(anecdotes.filter(a => (a.id === anecdote.id))[0])
    dispatch(setNotificationThunk('You voted for \'' + anecdotes.filter(a => (a.id === anecdote.id))[0].content + '\'', 5))
  }

  return (
    <div>
      {
        anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList