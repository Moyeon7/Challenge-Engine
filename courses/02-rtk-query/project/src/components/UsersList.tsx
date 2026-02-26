/**
 * Challenge 01: API Setup and Basic Fetching
 * Replace this stub with your implementation.
 * Requirements: Use RTK Query's useGetUsersQuery hook to fetch and display users.
 */
import { useGetUsersQuery } from '../api/usersApi'

export default function UsersList() {
  const { data, isLoading, error } = useGetUsersQuery()

  if (isLoading) {  
    return <p>Loading users...</p>
  }

  if (error) {
    return <p>Error loading users.</p>
  }

  return (
    <div data-testid="users-list">
      {data?.map(user => (
        <div key={user.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '0.5rem' }}>
          <h3>{user.name}</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}
