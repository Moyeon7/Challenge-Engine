import React from 'react';
import './UserProfile.css';

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

export default function UserProfile({ name, email, avatar }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = React.useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  // Get first letter of name for placeholder
  const initials = name.charAt(0).toUpperCase();

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
