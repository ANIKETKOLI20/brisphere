import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center text-black">
      <h1 className="text-lg font-bold">Brisphere</h1>
      <ul className="flex space-x-6">
        {/* Links now match section IDs in HomePage */}
        <li><a href="#discover">Discover</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
