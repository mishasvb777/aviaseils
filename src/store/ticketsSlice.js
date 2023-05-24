import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const state = {
  firstPageTickets: false,  
  TICKET: [],
  baseData : [],
  status: null,
  error: null,
  mostFree: true,
  mostFust: false,
  optimal: false,
  countCardsView: 5, 
  statusSearch : false,
  searchId: '',
  arr: []
}

export const getId = createAsyncThunk(
  'tickets/getId',
  async function(state){
    const idResponse = await fetch(`https://aviasales-test-api.kata.academy/search`) 
    const id = await idResponse.json()        
    return  id.searchId         
  }
)

export const getTickets = createAsyncThunk(
  'tickets/getTickets',
  async function(id, { getState }) {   
    try{      
      let { statusSearch } = getState().ticket      
      if(!statusSearch){
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)        
      const data = await response.json()
      
      return data    
      }   
    }

    catch(error){
      if (error.response.status === 500){
        console.log('Ошибка сервера, билет не найден')
      }
      if(!error.response){
        return getTickets()
      } else if (error.response.status === 500){
        console.log('Ошибка сервера, билет не найден')
      } else {
        console.log(error)
      }
    }
  }
)

const ticketSlise = createSlice({
  name: 'tickets',
  initialState: state,
  reducers: {
    setTickets(state, action) {
      state.TICKET = action.payload.tickets
    },
    changeTickets(state, actions) {
      state.firstPageTickets = false
      if (actions.payload === '0') { 
        state.TICKET.sort((a, b) => a.price - b.price)
        state.mostFree = true
        state.mostFust = false
        state.optimal = false
      }
      if (actions.payload === '1') {  
        state.TICKET.sort((a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration))        
        state.mostFree = false
        state.mostFust = true
        state.optimal = false
      }
      if (actions.payload === '2') {
        state.TICKET.sort((a, b) =>  a.segments[0].stops.length - b.segments[0].stops.length)  
        state.mostFree = false
        state.mostFust = false
        state.optimal = true
      }
    },    
    filterTickets(state, actions) {

      function sortTicketsFunc() {
        if(state.mostFree){
          state.TICKET.sort((a, b) => a.price - b.price)
        }
        if(state.mostFust){
          state.TICKET.sort((a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration))  
        }
        if(state.optimal){
          state.TICKET.sort((a, b) =>  a.segments[0].stops.length - b.segments[0].stops.length)  
        }
      }

      function filterTicketsFunc(val) {
        if(actions.payload.checkdeStatus){
          const filterTickets = JSON.parse(JSON.stringify(state.baseData))
          const filterArr = filterTickets.filter(value => value !== null) 
          const newState = filterArr.filter(el => el.segments[0].stops.length === val || el.segments[1].stops.length === val)
          const oldState = JSON.parse(JSON.stringify(state.TICKET))
          newState.map(el => oldState.unshift(el))          
          state.TICKET = Array.from(new Set(oldState.map(obj => JSON.stringify(obj)))).map(str => JSON.parse(str))
          state.countCardsView = 5
          sortTicketsFunc()
        } else if(!actions.payload.checkdeStatus){
          state.countCardsView = 5          
          const filterTickets = JSON.parse(JSON.stringify(state.TICKET))          
          const filterArr = filterTickets.filter(value => value !== null)                         
          const newState = filterArr.filter(el => el.segments[0].stops.length !== val && el.segments[1].stops.length !== val)                              
          state.TICKET = [...newState] 
        } 
      }
      
      state.firstPageTickets = false

      if (actions.payload.id === 'all') {        
        if(actions.payload.checkdeStatus){
          state.TICKET = state.baseData          
          state.countCardsView = 5
          sortTicketsFunc()
        } else if (!actions.payload.checkdeStatus){
          const newState = []          
          state.TICKET = newState
        }       
      }

      if (actions.payload.id === 'non_stop') {
        filterTicketsFunc(0)
      }              
      
      if (actions.payload.id === 'one_transplant') {   
        filterTicketsFunc(1)
      }

      if (actions.payload.id === 'two_transplant') {
        filterTicketsFunc(2)
      }

      if (actions.payload.id === 'three_transplant') {  
        filterTicketsFunc(3)    
      }
    },
    addFiveTickets(state, actions){
      state.countCardsView = state.countCardsView + 5
    },    
    test(state, actions){
      state.TICKET = actions.payload
    },
    hadelSearchId(state, action){
      state.searchId = action.payload
      //state.searchId = g            
    },
    handelSearchStatus(state){      
      state.statusSearch = true      
    }
  },
  extraReducers: {
    [getTickets.pending] : (state, action) => {      
      state.status = 'loading'  
    },
    [getTickets.fulfilled] : (state, action) => {                
      if(action.payload.stop ){        
        state.status = 'resolve', 
        state.statusSearch = true  
      } else if(action.payload.tickets !== null || action.payload.tickets !== undefined){
        state.arr = state.arr.concat(action.payload.tickets)
      }            
      const arrNew = state.arr      
      state.TICKET = arrNew.sort((a, b) => a.price - b.price) 
      state.baseData = state.arr.sort((a, b) => a.price - b.price)
      state.error = null            
    },   
    [getTickets.rejected] : () =>  {console.log('rejected')},
  }
})


export const { setTickets } = ticketSlise.actions
export const ticketSliseActions = ticketSlise.actions

export default ticketSlise

