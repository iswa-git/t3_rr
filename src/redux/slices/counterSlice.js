import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value1 : 0,
    value2 : 0,
    value3 : 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state, action) => {
        return {
            ...state, [action.payload]:state[action.payload]+1
        }
    },
    
    reset: (state, action ) => {
        return{
            ...state, [action.payload]:0
        }
    
    }
  }
});

export const { increment, reset } = counterSlice.actions

export default counterSlice.reducer