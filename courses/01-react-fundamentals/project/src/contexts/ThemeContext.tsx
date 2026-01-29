/**
 * Challenge 03: State Management with Context
 * Replace this stub with your implementation.
 * Requirements: ThemeProvider, useTheme, theme state (light/dark), persist to localStorage.
 */

import { createContext, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // TODO: Implement per challenges/03-state-management/README.md
  return (
    <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  // TODO: Implement per challenges/03-state-management/README.md
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
