import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealWrapper = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      // Define your scroll reveal options here
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 100,
    });
  }, []);

  return <div className="reveal">{children}</div>;
};

export default ScrollRevealWrapper;
