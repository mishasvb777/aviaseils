import { createSlice } from '@reduxjs/toolkit'

const state = {
  active: [true, false, false]
}

const buttonSlice = createSlice({
  name: 'toggleActiveButton',
  initialState: state,
  reducers: {
    toggleActiveStatus(state, actions) {
      const id = actions.payload      
      state.active = state.active.map(el => el = false)
      state.active.splice(id, 1, true)
    },    
  }
})

export const buttonSliceActions = buttonSlice.actions

export default buttonSlice

