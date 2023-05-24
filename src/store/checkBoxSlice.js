import { createSlice } from '@reduxjs/toolkit'

const stateCheckBox = {
  all: true,
  non_stop: true,
  one_transplant: true,
  two_transplant: true,
  three_transplant: true,
}

function changeCheckedAll(obj, bool) {
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = bool
  }
}

const checkBoxSlice = createSlice({
  name: 'checkBox',
  initialState: stateCheckBox,
  reducers: {
    toggleCheckedStatus(state, actions) {
      const id = actions.payload
      if (state.all && state[id] && id !== 'all') {
        state.all = false
        state[id] = false
      } else if (id === 'all') {
        if (state.all === true) {
          changeCheckedAll(state, false)
        } else if (state.all === false) {
          changeCheckedAll(state, true)
        }
      } else if (id !== 'all') {
        state[id] = state[id] ? false : true
        if (
          Object.values(state)
            .slice(1)
            .every((value) => value === true)
        ) {
          state.all = true
        }
      }
    },
  },
})

export const filtersActions = checkBoxSlice.actions

export default checkBoxSlice
