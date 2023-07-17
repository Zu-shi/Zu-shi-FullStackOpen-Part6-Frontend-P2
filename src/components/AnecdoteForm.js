import { useDispatch } from 'react-redux'
import notificationSlice, { setNotificationThunk } from '../reducers/notificationReducer'
import { addAnecdoteThunk } from '.././reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const onAddAnecdote = async (e) => {


    e.preventDefault()
    console.log('addNewAnecdote', e.target.content.value)
    dispatch(addAnecdoteThunk(e.target.content.value))
    dispatch(setNotificationThunk('You added anecdote \'' + e.target.content.value + '\'', 5))
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