import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// We outline the objectives of the test.:
test('renders learn react link', () => {
  // Arrange: We get ready the testing environment, and rendering of the component;
  render(<App />);

  // Act: Look for the anticipated link.
  const linkElement = screen.getByText(/learn react/i);

  // Assert: check that the document contains the necessary link.
  expect(linkElement).toBeInTheDocument();
});
