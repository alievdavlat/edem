import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  child: null,
  isOpen:false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action){
      state.child = action.payload.child
      state.isOpen = action.payload.open
    } 
  },
})


export const {openModal} = modalSlice.actions

export default modalSlice.reducer