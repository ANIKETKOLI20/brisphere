import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    rooms: 1,
    adults: 1,
    children: 0,
    name: '',
    phone: '',
  });

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};
