import { useState } from 'react';
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
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const placeholderAvatar = 'https://via.placeholder.com/120?text=' + encodeURIComponent(name[0] || 'U');

  return (
    <div className="user-profile" data-testid="user-profile">
      <div className="profile-header">
        <img 
          src={avatar || placeholderAvatar}
          alt={name}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-email">{email}</p>
        </div>
      </div>
      <button 
        type="button"
        className={`follow-button ${isFollowing ? 'following' : ''}`}
        onClick={handleFollowClick}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
