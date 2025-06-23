import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Dynamically importing images using Vite's new URL system
const images = [
  new URL('../assets/lee1.jpg', import.meta.url).href,
  new URL('../assets/lee2.jpg', import.meta.url).href,
  new URL('../assets/lee3.jpg', import.meta.url).href,
  new URL('../assets/lee4.jpg', import.meta.url).href,
  new URL('../assets/lee5.jpg', import.meta.url).href,
  new URL('../assets/lee6.jpg', import.meta.url).href,
  new URL('../assets/lee7.jpg', import.meta.url).href,
  new URL('../assets/lee8.jpg', import.meta.url).href,
  new URL('../assets/lee9.jpg', import.meta.url).href,
  new URL('../assets/lee10.jpg', import.meta.url).href,
  new URL('../assets/lee11.jpg', import.meta.url).href,
  new URL('../assets/lee12.jpg', import.meta.url).href,
  new URL('../assets/lee13.jpg', import.meta.url).href,
  new URL('../assets/lee14.jpg', import.meta.url).href,
  new URL('../assets/lee18.jpg', import.meta.url).href,
  new URL('../assets/lee19.jpg', import.meta.url).href,
  new URL('../assets/lee20.jpg', import.meta.url).href,
  new URL('../assets/lee21.jpg', import.meta.url).href,
  new URL('../assets/lee22.jpg', import.meta.url).href,
];

const Gallery = () => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
      cleanup: true,
    });
  }, []);

  return (
    <div className="reveal min-h-screen bg-gray-900 text-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Lee ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
