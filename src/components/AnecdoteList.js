import { useSelector, useDispatch } from 'react-redux'
import anecdoteSlice from '.././reducers/anecdoteReducer'
import notificationSlice from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    console.log(state)
    if (state.filter === '') {
      return state.anecdotes
    }
    else {
      return state.anecdotes.filter(item => item.content.includes(state.filter))
    }
  })

  const vote = (id) => {
    console.log('vote', id)
    dispatch(anecdoteSlice.actions.voteForAnecdote(id))
    console.log(anecdotes.filter(a => (a.id === id))[0])
    dispatch(notificationSlice.actions
      .setMessage('You voted for \'' + anecdotes.filter(a => (a.id === id))[0].content + '\'')
    )
    setTimeout(() => {
      dispatch(notificationSlice.actions.setMessage(''))
    }, 2000)
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
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList