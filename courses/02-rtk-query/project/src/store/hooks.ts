import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useGetUsersQuery } from '../api/usersApi'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

// RTK Query hooks
export const useQueryHook = useGetUsersQuery

