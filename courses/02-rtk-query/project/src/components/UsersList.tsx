import { useGetUsersQuery } from '../api/usersApi'

const UsersList = () => {
  const { data, isLoading, isError } = useGetUsersQuery()

  if (isLoading) return <p>Loading…</p>
  if (isError) return <p>Error</p>

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong><br />
          @{user.username}<br />
          {user.email}
        </li>
      ))}
    </ul>
  )
}

export default UsersList
