import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';


test('Strike is found', () => {
  const { getAllByText } = render(<App />);
  // assert that the "strike" header is on the DOM
  getAllByText(/strike/i);
});


test('Ball is found', () => {
  const { getAllByText } = render(<App />);
  // assert that the "strike" header is on the DOM
  getAllByText(/ball/i);
});

test('Foul is found', () => {
  const { getAllByText } = render(<App />);
  // assert that the "strike" header is on the DOM
  getAllByText(/foul/i);
});


const app = render(<App />)
const strikeBtn = app.getByTestId('strike-btn');
const strikes = app.getByTestId('strikes');
fireEvent.click(strikeBtn)
expect(strikes.textContent).toBe('Strike 1');