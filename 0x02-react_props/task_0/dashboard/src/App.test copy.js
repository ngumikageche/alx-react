// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test('renders a div with the class App-header', () => {
  render(<App />);
  const headerElement = screen.getByRole('className', { name: /Header/i });
  expect(headerElement).toBeInTheDocument();
});

test('renders a div with the class App-body', () => {
    render(<App />);
    const bodyElement = screen.getByTestId('app-body');
    expect(bodyElement).toBeInTheDocument();
  });
test('renders a div with the class App-footer', () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo', { name: /Footer/i });
  expect(footerElement).toBeInTheDocument();
});
