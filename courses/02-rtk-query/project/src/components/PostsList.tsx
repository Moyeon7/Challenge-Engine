/**
 * Challenge 02: Data Display and Caching
 * Replace this stub with your implementation.
 * Requirements: Use RTK Query to fetch and display posts with caching.
 */

import { useGetPostsQuery } from "../api/usersApi";

export default function PostsList() {
  const { data, isLoading, error } = useGetPostsQuery();

  if(isLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>Error...</p>
  }

  return (
    <div data-testid="posts-list">
      {data?.map((post) =>(
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '0.5rem' }}>
          <h1><strong>Title: </strong>{post.title}</h1>
          <p><strong>Body: </strong>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
