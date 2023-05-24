import { configureStore } from '@reduxjs/toolkit'
import checkBoxSlice from './checkBoxSlice'
import buttonSlice from './sortSlice'
import ticketSlice from './ticketsSlice'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore({
  reducer: {
    checkbox: checkBoxSlice.reducer,
    button: buttonSlice.reducer,
    ticket: ticketSlice.reducer,
  },
})

export default store
