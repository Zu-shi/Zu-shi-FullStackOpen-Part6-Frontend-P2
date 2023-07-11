import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '.././reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    console.log('addNewAnecdote', e.target.content.value)
    dispatch(addNewAnecdote(e.target.content.value))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm