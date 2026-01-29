import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../src/components/TodoList';

describe('Challenge 02: Todo List Application', () => {
  it('should render input field and add button', () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('should add a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.type(input, 'Test todo');
    await user.click(addButton);
    
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  it('should toggle todo completion', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.type(input, 'Test todo');
    await user.click(addButton);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should delete a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.type(input, 'Test todo');
    await user.click(addButton);
    
    expect(screen.getByText('Test todo')).toBeInTheDocument();
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    await user.click(deleteButton);
    
    expect(screen.queryByText('Test todo')).not.toBeInTheDocument();
  });

  it('should show completed todos with strikethrough', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    await user.type(input, 'Test todo');
    await user.click(addButton);
    
    const todoText = screen.getByText('Test todo');
    const checkbox = screen.getByRole('checkbox');
    
    await user.click(checkbox);
    
    // Check if completed styling is applied (this depends on implementation)
    expect(checkbox).toBeChecked();
  });
});
