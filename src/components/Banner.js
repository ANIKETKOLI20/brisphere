import React from 'react';
import { useBooking } from '../context/BookingContext';

const Banner = ({ onBookClick }) => {
  const { bookingDetails, setBookingDetails } = useBooking();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative bg-cover bg-center h-96 text-white" style={{ backgroundImage: 'url("/path/to/image.jpg")' }}>
      <div className="bg-black bg-opacity-50 p-8 h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold">Work from Ladakh</h2>
        <p className="text-lg">India's first true digital tourism ecosystem</p>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Check-in Date</label>
            <input 
              type="date" 
              name="checkIn" 
              value={bookingDetails.checkIn} 
              onChange={handleInputChange} 
              className="input input-bordered w-full" 
            />
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Check-out Date</label>
            <input 
              type="date" 
              name="checkOut" 
              value={bookingDetails.checkOut} 
              onChange={handleInputChange} 
              className="input input-bordered w-full" 
            />
          </div>

          {/* Number of Rooms */}
          <div>
            <label className="block text-sm font-medium mb-1">Number of Rooms</label>
            <input 
              type="number" 
              name="rooms" 
              min="1" 
              value={bookingDetails.rooms} 
              onChange={handleInputChange} 
              className="input input-bordered w-full" 
            />
          </div>

          {/* Adults */}
          <div>
            <label className="block text-sm font-medium mb-1">Adults</label>
            <input 
              type="number" 
              name="adults" 
              min="1" 
              value={bookingDetails.adults} 
              onChange={handleInputChange} 
              className="input input-bordered w-full" 
            />
          </div>

          {/* Children */}
          <div>
            <label className="block text-sm font-medium mb-1">Children</label>
            <input 
              type="number" 
              name="children" 
              min="0" 
              value={bookingDetails.children} 
              onChange={handleInputChange} 
              className="input input-bordered w-full" 
            />
          </div>

          {/* Book Button */}
          <div className="col-span-2 md:col-span-1 flex items-end">
            <button 
              className="btn btn-primary w-full" 
              onClick={onBookClick}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
