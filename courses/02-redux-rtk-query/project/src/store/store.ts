import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from '../api/usersApi'

export const store = configureStore({
<<<<<<< HEAD:courses/02-rtk-query/project/src/store/store.ts
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)  
=======
  reducer: {},
>>>>>>> 7bedb465e2d816e1b55271afad596b316c265bad:courses/02-redux-rtk-query/project/src/store/store.ts
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
