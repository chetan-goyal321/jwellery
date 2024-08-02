import React from 'react';
import './Testimonials.css'; // Ensure you create this CSS file

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This is a fantastic website! The user experience is seamless, and the design is elegant. Highly recommended!",
      image: "https://th.bing.com/th/id/OIP.PlsI8uSHyAIuiBSFST4HrAHaE8?rs=1&pid=ImgDetMain" // Placeholder image URL
    },
    {
      name: "Jane Smith",
      feedback: "I love the clean design and the easy navigation. The content is well-organized and visually appealing.",
      image: "https://th.bing.com/th/id/OIP.PlsI8uSHyAIuiBSFST4HrAHaE8?rs=1&pid=ImgDetMain" // Placeholder image URL
    },
    {
      name: "Alice Johnson",
      feedback: "The website is incredibly user-friendly and looks professional. The slider feature is a nice touch!",
      image: "https://th.bing.com/th/id/OIP.PlsI8uSHyAIuiBSFST4HrAHaE8?rs=1&pid=ImgDetMain" // Placeholder image URL
    }
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">— {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
