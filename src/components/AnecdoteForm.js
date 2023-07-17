import { useDispatch } from 'react-redux'
import { anecdoteSlice } from '.././reducers/anecdoteReducer'
import notificationSlice from '../reducers/notificationReducer'
import { addAnecdote } from '../services/anecdotesService'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const onAddAnecdote = async (e) => {
    e.preventDefault()
    console.log('addNewAnecdote', e.target.content.value)
    const data = await addAnecdote(e.target.content.value)
    dispatch(anecdoteSlice.actions.addNewAnecdote(data.content))


    dispatch(notificationSlice.actions
      .setMessage('You added anecdote \'' + data.content + '\'')
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