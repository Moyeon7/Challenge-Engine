import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../src/contexts/ThemeContext';
import ThemeToggle from '../src/components/ThemeToggle';

// Test component that uses theme
const TestComponent = () => {
  const { theme } = useTheme();
  return <div data-testid="theme-display">{theme}</div>;
};

describe('Challenge 03: State Management with Context', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should provide theme context', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-display')).toBeInTheDocument();
  });

  it('should default to light theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
  });

  it('should toggle theme', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestComponent />
        <ThemeToggle />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-display')).toHaveTextContent('light');
    
    const toggle = screen.getByRole('button');
    await user.click(toggle);
    
    expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
  });

  it('should persist theme to localStorage', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestComponent />
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const toggle = screen.getByRole('button');
    await user.click(toggle);
    
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should load theme from localStorage on mount', () => {
    localStorage.setItem('theme', 'dark');
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    
    expect(screen.getByTestId('theme-display')).toHaveTextContent('dark');
  });
});
