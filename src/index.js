import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import { anecdoteSlice } from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'
import notificationSlice from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteSlice.reducer,
    filter: filterSlice.reducer,
    notification: notificationSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)