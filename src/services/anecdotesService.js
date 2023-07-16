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

// export const getAllAnecdotes = async function () {
//   const response = await axios.get(defaultUrl)
//   console.log(response)
//   return response.data
// }