import axios from 'axios'

const defaultUrl = 'http://localhost:3001/anecdotes'

// export const getAllAnecdotes = function () {
//   let items = []
//   axios.get(defaultUrl).then(
//     (response) => {
//       console.log(response)
//       items = response.data
//     }
//   )
//   console.log("items")
//   console.log(items)
//   return items
// }

const getId = () => (100000 * Math.random()).toFixed(0)

export const getAllAnecdotes = async function () {
  try {
    const response = await axios.get(defaultUrl)
    console.log(response)
    const items = response.data
    console.log("items")
    console.log(items)
    return items
  } catch (error) {
    console.error('Error getting anecdotes:', error)
  }
}

export const addAnecdote = async function (content) {
  try {
    const response = await axios.post(defaultUrl, {
      content: content,
      id: getId(),
      votes: 0
    })
    console.log(response)
    const items = response.data
    console.log("items")
    console.log(items)
    return items
  } catch (error) {
    console.error('Error getting anecdotes:', error)
  }
}

export const voteForAnecdote = async function (content, id, votes) {
  try {
    const response = await axios.put(defaultUrl, {
      content: content,
      id: getId(),
      votes: 0
    })
    console.log(response)
    const items = response.data
    console.log("items")
    console.log(items)
    return items
  } catch (error) {
    console.error('Error getting anecdotes:', error)
  }
}

// export const getAllAnecdotes = async function () {
//   const response = await axios.get(defaultUrl)
//   console.log(response)
//   return response.data
// }