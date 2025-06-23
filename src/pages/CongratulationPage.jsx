import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';

const CongratulationPage = () => {
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
    <section className="reveal flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <FaCheckCircle className="text-green-600 text-7xl mb-6 animate-bounce" />
      <h1 className="text-3xl font-bold text-green-700 mb-4">Congratulations!</h1>
      <p className="text-lg text-center text-gray-700 mb-6 max-w-md">
        Your proof of payment has been submitted successfully. Our team will verify it shortly.
        Thank you for your support and dedication!
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default CongratulationPage;
