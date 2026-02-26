import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type User = {
  id: number
  name: string
  email: string
  username?: string
}

type Post = {
  id: number
  title: string
  body: string
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  tagTypes: ['Users', 'Posts'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
      providesTags: ["Users"],
    }),
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: ['Posts'],
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (newPost) => ({
        url: "users",
        method: "POST",
        body: newPost
      }), 
      async onQueryStarted(newUser, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData("getUsers", undefined, (draft) => {
            draft.push({
              id: Date.now(),
              ...newUser,
            } as User)
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<User, Partial<User> & { id: number }>({
      query: (updateUser) => ({
        url: `users/${updateUser.id}`,
        method: "PUT",
        body: updateUser,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Users'],
    }),
  })
})

export const { useGetUsersQuery, useGetPostsQuery, useDeleteUserMutation, useAddUserMutation, useUpdateUserMutation } = usersApi
