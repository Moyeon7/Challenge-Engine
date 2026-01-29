/**
 * Challenge 01: User Profile Component
 * Replace this stub with your implementation.
 * Requirements: name, email, avatar (or placeholder), Follow button with toggle state.
 */

interface UserProfileProps {
  name: string;
  email: string;
  avatar?: string;
}

export default function UserProfile({ name, email, avatar }: UserProfileProps) {
  return (
    <div data-testid="user-profile">
      {/* TODO: Implement per challenges/01-user-profile/README.md */}
      <span>{name}</span>
      <span>{email}</span>
      {avatar && <img src={avatar} alt="" />}
      <button type="button">Follow</button>
    </div>
  );
}
