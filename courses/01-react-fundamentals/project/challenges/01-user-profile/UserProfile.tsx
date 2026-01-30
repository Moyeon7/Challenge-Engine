import React from 'react';
import './UserProfile.css';

/**
 * Challenge 01: User Profile Component
 * Displays user information with a toggleable Follow button
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
  
  // Use avatar if provided, otherwise create a placeholder with initials
  const displayAvatar = avatar || `https://via.placeholder.com/120?text=${initials}`;

  return (
    <div className="user-profile" data-testid="user-profile">
      <div className="profile-header">
        <img 
          src={displayAvatar}
          alt={`${name}'s avatar`}
          className="profile-avatar"
          data-testid="profile-avatar"
        />
        <div className="profile-info">
          <h2 className="profile-name" data-testid="profile-name">{name}</h2>
          <p className="profile-email" data-testid="profile-email">{email}</p>
        </div>
      </div>
      <button 
        type="button"
        className={`follow-button ${isFollowing ? 'following' : ''}`}
        onClick={handleFollowClick}
        data-testid="follow-button"
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
