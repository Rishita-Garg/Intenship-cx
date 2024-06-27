import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'; // Your CSS file with styles

const testimonials = [
  {
    quote:
      "Since partnering with [Your Company Name], our shipping process has become incredibly streamlined. Their communication is excellent, and they always keep us informed about the status of our deliveries. This has allowed us to focus on growing our business while knowing our logistics are in good hands.",
    author: "Sarah Jones"
  },
  {
    quote:
      "During a recent supply chain disruption, [Your Company Name] went above and beyond to ensure our shipments arrived on time. Their proactive approach and problem-solving skills were invaluable in minimizing the impact on our business. We truly appreciate their dedication and expertise.",
    author: "David Patel"
  },
  {
    quote:
      "We were initially hesitant to switch logistics providers, but [Your Company Name] impressed us with their competitive rates and commitment to customer service. They took the time to understand our specific needs and create a customized solution that saved us money while improving our delivery times.",
    author: "Emily Chen"
  },
  {
    quote:
      "Our business operates internationally, and we needed a logistics partner who could handle complex shipments across borders. [Your Company Name] has a strong global network and provides exceptional local support in each region. This ensures our products reach their destinations efficiently and compliantly.",
    author: "Mohammed Khan"
  },
  {
    quote:
      "Transparency is crucial in our business, and [Your Company Name] excels in this area. They provide us with real-time tracking information and clear communication throughout the entire shipping process. This level of transparency builds trust and allows us to manage our logistics with confidence.",
    author: "Maria Garcia"
  }
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Assuming the initial middle slide is the third one

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '1px', // Adjust as needed
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      
      <Slider {...settings}>
      
        {testimonials.map((testimonial, index) => (
          <div className="sizea">
          <div key={index} className={index === currentSlide ? "testimonial-card testimonial-card--middle" : "testimonial-card"}>
            <p className="testimonial-text">{testimonial.quote}</p>
            <p className="testimonial-author">- by {testimonial.author}</p>
          </div>
          </div>
        ))}
        
      </Slider>
      
    </div>
  );
};

export default Testimonial;
