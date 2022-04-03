import { render, screen } from '@testing-library/react';
import NotesForm from './NotesForm';

test('renders notes text', () => {
    render(<NotesForm />);
    const linkElement = screen.getByText('Notes');
    expect(linkElement).toBeInTheDocument(); 
  });
  