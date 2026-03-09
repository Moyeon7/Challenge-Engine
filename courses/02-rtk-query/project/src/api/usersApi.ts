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
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser
      }), 
      async onQueryStarted(newUser, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData("getUsers", undefined, (draft) => {
            draft.push({
              id: Date.now(),
              name: newUser.name ?? "",
              email: newUser.email ?? "",
              username: newUser.username,
            });
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
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
      async onQueryStarted(updatedUser, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData("getUsers", undefined, (draft) => {
            const user = draft.find((u) => u.id === updatedUser.id)
            if (user) {
              Object.assign(user, updatedUser)
            }
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
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData("getUsers", undefined, (draft) => {
            return draft.filter((user) => user.id !== id)
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
  })
})

export const { useGetUsersQuery, useGetPostsQuery, useDeleteUserMutation, useCreateUserMutation, useUpdateUserMutation } = usersApi
