import { useState } from 'react';
import './UserProfile.css';


const BUTTON_TEXT_FOLLOW = 'Follow';
const BUTTON_TEXT_FOLLOWING = 'Following';

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

  const placeholderAvatar = 'https://via.placeholder.com/150?text=Avatar';

  return (
    <div className="user-profile" data-testid="user-profile">
      <div className="profile-container">
        <img 
          src={avatar || placeholderAvatar} 
          alt={`${name}'s avatar`}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-email">{email}</p>
          <button
            type="button"
            className={`follow-button ${isFollowing ? 'following' : 'follow'}`}
            onClick={handleFollowClick}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
