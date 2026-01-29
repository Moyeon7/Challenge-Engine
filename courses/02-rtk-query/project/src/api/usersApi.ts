import { createApi } from '@reduxjs/toolkit/query/react'
import { mockApi } from './mockServer'

type User = {
  id: number
  name: string
  email: string
  username: string
}

// custom baseQuery because mock API ≠ HTTP
const customBaseQuery = async () => {
  try {
    const data = await mockApi.getUsers()
    return { data }
  } catch (error) {
    return { error }
  }
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: customBaseQuery as any,
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => null,
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
