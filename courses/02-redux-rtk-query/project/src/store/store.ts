import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from '../api/usersApi'
import counterReducer from './slices/counterSlice';
import uiReducer from './slices/uiSlice';
import usersReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    counter: counterReducer,
    ui: uiReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
