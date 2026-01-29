/**
 * Challenge 03: Theme toggle button
 * Uses ThemeContext - replace with your implementation if needed.
 */

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <button type="button" onClick={toggleTheme}>
      Toggle theme
    </button>
  );
}
