import { useDispatch } from 'react-redux'
import { anecdoteSlice } from '.././reducers/anecdoteReducer'
import notificationSlice from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const onAddAnecdote = async (e) => {


    e.preventDefault()
    console.log('addNewAnecdote', e.target.content.value)
    dispatch(anecdoteSlice.actions.addNewAnecdote(e.target.content.value))

    dispatch(notificationSlice.actions
      .setMessage('You added anecdote \'' + e.target.content.value + '\'')
    )
    setTimeout(() => {
      dispatch(notificationSlice.actions.setMessage(''))
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={onAddAnecdote}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm