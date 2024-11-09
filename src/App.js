import React from 'react';
import HomePage from './pages/HomePage';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <BookingProvider>
      <HomePage />
    </BookingProvider>
  );
}

export default App;
