import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modalSlice'
import localeSlice from './features/localeSlice'

export const store = configureStore({
  reducer: {
    modal:modalSlice,
    locale:localeSlice
  },
})