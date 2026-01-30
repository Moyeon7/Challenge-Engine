/**
 * Challenge 01: User Profile Component
 * See challenges/01-user-profile/README.md for requirements.
 */

import { useState } from 'react';

interface UserProfileProps {
  name: string;
  email: string;
  avatar?: string;
}

function UserProfile({ name, email, avatar }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div id="user-profile">
      {avatar ? (
        <img
          id="user-profile-avatar"
          src={avatar}
          alt={`${name} profile`}
        />
      ) : (
        <div id="user-profile-avatar" aria-hidden>
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      <span>{name}</span>
      <span>{email}</span>
      <button type="button" onClick={handleFollowClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

export default UserProfile;
