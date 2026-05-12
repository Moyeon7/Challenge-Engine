import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from '../api/usersApi'
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
