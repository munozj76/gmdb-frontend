import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  const { getByText } = render(<App />);
});

// Test out behavior of page
// Do API Stubbing here


