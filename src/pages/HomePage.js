import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Footer from '../components/Footer';

const HomePage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div>
      <Navbar />
      
      {/* Banner Section */}
      <section id="banner">
        <Banner onBookClick={() => setShowBookingForm(true)} />
      </section>
      
      {showBookingForm && <BookingForm />}

      <div className="container mx-auto p-4">
        {/* Testimonials Section with ID for hash navigation */}
        <section id="discover">
          <Testimonials />
        </section>

        {/* Services Section with ID for hash navigation */}
        <section id="services">
          <Services />
        </section>
      </div>
      
      {/* Footer Section with ID for hash navigation */}
      <section id="about-us">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
