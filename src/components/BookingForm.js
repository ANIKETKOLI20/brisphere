import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';

const BookingForm = () => {
  const { bookingDetails, setBookingDetails } = useBooking();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const BASE_PRICE_PER_ROOM = 12430;

  // Calculate the total price
  const calculateTotalPrice = () => {
    const roomCost = BASE_PRICE_PER_ROOM * (bookingDetails.rooms || 0);
    const childrenCost = (BASE_PRICE_PER_ROOM / 2) * (bookingDetails.children || 0);
    return roomCost + childrenCost;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: parseInt(value) || value }));
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-4 text-black">
      <h3 className="text-xl font-semibold">Complete your booking</h3>
      <p>Check-in: {bookingDetails.checkIn || ''}</p>
      <p>Check-out: {bookingDetails.checkOut || ''}</p>
      <p>Rooms: {bookingDetails.rooms || 0}</p>
      <p>Adults: {bookingDetails.adults || 0}</p>
      <p>Children: {bookingDetails.children || 0}</p>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={bookingDetails.name || ''}
        onChange={handleInputChange}
        className="input input-bordered w-full mt-4 text-white"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={bookingDetails.phone || ''}
        onChange={handleInputChange}
        className="input input-bordered w-full mt-4 text-white"
      />
      
      <button 
        className="btn btn-success w-full mt-4" 
        onClick={handleConfirm}
      >
        Price ₹{calculateTotalPrice().toLocaleString()}
      </button>

      {showConfirmation && (
        <div className="alert alert-success mt-4">
          <strong>Booking Confirmed!</strong>
          <p>Name: {bookingDetails.name}</p>
          <p>Phone: {bookingDetails.phone}</p>
          <p>Check-in: {bookingDetails.checkIn}</p>
          <p>Check-out: {bookingDetails.checkOut}</p>
          <p>Rooms: {bookingDetails.rooms}</p>
          <p>Adults: {bookingDetails.adults}</p>
          <p>Children: {bookingDetails.children}</p>
          <p>Total Price: ₹{calculateTotalPrice().toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
