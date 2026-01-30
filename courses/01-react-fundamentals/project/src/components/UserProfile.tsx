import React from 'react';
import './UserProfile.css';

/**
 * Challenge 01: User Profile Component
 * Displays user information with a toggleable Follow button
 * Includes accessibility features for keyboard navigation and screen readers
 */

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
    <div className="user-profile" id="user-profile">
      <div className="profile-header">
        {avatar ? (
          <img 
            src={avatar}
            alt={`${name}'s profile picture`}
            className="profile-avatar"
            id="user-profile-avatar"
          />
        ) : (
          <div 
            className="profile-avatar profile-placeholder"
            id="user-profile-avatar"
            role="img"
            aria-label={`${name}'s avatar placeholder with initials ${initials}`}
          >
            {initials}
          </div>
        )}
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-email">{email}</p>
        </div>
      </div>
      <button 
        type="button"
        className={`follow-button ${isFollowing ? 'following' : ''}`}
        onClick={handleFollowClick}
        aria-pressed={isFollowing}
        aria-label={`${isFollowing ? 'Unfollow' : 'Follow'} ${name}`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
