import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

import Img1 from '../assets/images/img1.jpeg';  // Importing the image
import Img10 from '../assets/images/img10.jpeg';  // Importing the image

const imageData = [
  {
    url: Img1,
    title: 'Image One Title',
    alt: 'Description of Image One'
  },
  {
    url: Img10,
    title: 'Image Two Title',
    alt: 'Description of Image Two'
  },
  {
    url: Img1,
    title: 'Image Three Title',
    alt: 'Description of Image Three'
  }
];

const ImageCarousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <Carousel data-aos="fade-up" style={{ marginLeft: '40px', height: '60vh',}}>
      {imageData.map((image, index) => (
        <Carousel.Item key={index}  >
          <img
            className="d-block w-100 h-full object-cover"
            src={image.url}
            alt={image.alt}
          />
          <Carousel.Caption className="absolute inset-0 flex items-center justify-center"
                            style={{ marginBottom: '200px' }}
                            data-aos="fade-down"
                            data-aos-delay="500">
            <h3 className="text-white text-lg font-semibold shadow-lg">
              {image.title}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
