import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useNavigate } from 'react-router-dom';

const MeetAndGreet = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid = formData.fullName && formData.email && formData.phone;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmitted(true);
      setTimeout(() => {
        navigate('/cardpage');
      }, 1000);
    }
  };

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
    <section className="reveal min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
      {!submitted && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Meet & Greet Reservation
          </h2>

          <p className="text-sm text-gray-400 mb-6 text-center">
            Reserve your exclusive chance to meet Lee Byung-hun.<br />
            <span className="text-blue-400 font-semibold">Reservation Fee: $1,000</span>
          </p>

          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-full font-bold transition ${
              isFormValid
                ? 'bg-gray-600 hover:bg-gray-700'
                : 'bg-gray-500 cursor-not-allowed'
            }`}
          >
            Proceed to Pay $1,000
          </button>
        </form>
      )}
    </section>
  );
};

export default MeetAndGreet;
