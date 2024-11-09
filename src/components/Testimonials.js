import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Arjun Raghav',
      review: 'Great experience working remotely... The team is highly collaborative, and the work environment is comfortable.',
    },
    {
      name: 'Anand Solanki',
      review: 'Beautiful place to work and relax... I love the flexible hours and supportive colleagues. Definitely recommend!',
    },
    {
      name: 'Priya Sharma',
      review: 'Had an amazing time working here. The leadership is inspiring, and the team is always willing to help.',
    },
    {
      name: 'Vikram Singh',
      review: 'A fantastic place for professional growth. The projects are challenging, and the culture is positive.',
    },
    {
      name: 'Neha Patel',
      review: 'Wonderful work-life balance! The company values its employees and provides great benefits.',
    },
    {
      name: 'Rohit Verma',
      review: 'Great company culture, where everyone is treated with respect. It’s a great place to enhance your skills.',
    },
  ];

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4 text-center">Discover</h3>
      <div className="flex flex-wrap justify-center gap-4 text-black">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 w-64 h-64 bg-gray-100 border border-gray-300 rounded-lg shadow-lg"
          >
            <p className="font-bold text-lg">{testimonial.name}</p>
            <p className="text-center mt-2">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
