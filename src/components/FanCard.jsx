import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leeImage from '../assets/lee7.jpg';
import ScrollReveal from 'scrollreveal';
import CustomSelect from './CustomSelect';

const FanCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    membershipType: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.id]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.membershipType) newErrors.membershipType = 'Please select a membership type';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ firstName: '', lastName: '', email: '', membershipType: '' });
      navigate('/cardpage');
    }
  };

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      interval: 200,
    });
  }, []);

  return (
    <section className="p-8 min-h-screen bg-gray-900 text-white">
      {/* Responsive Image */}
      <div className="mb-6 reveal">
        <img
          src={leeImage}
          alt="Lee Byung Hun Fan Club"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-3xl font-bold mb-4 reveal">Membership</h2>
      <p className="mb-6 reveal">
        Join the exclusive fan card membership program for behind-the-scenes
        content, early event access, and more!
      </p>

      {/* Membership Type Selector */}
      <div className="mb-6 reveal relative z-10">
        <p className="mb-2 font-medium">Choose your type of membership</p>
        <CustomSelect
          value={formData.membershipType}
          onChange={handleChange}
          error={errors.membershipType}
        />
        {errors.membershipType && (
          <span className="text-sm text-red-500 mt-1">
            {errors.membershipType}
          </span>
        )}
      </div>

      {/* Form */}
      <div className="max-w-xl p-6 bg-black rounded-lg shadow-md reveal relative z-0">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-1 font-semibold text-gray-400"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`px-4 py-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <span className="text-sm text-red-500 mt-1">
                {errors.firstName}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-1 font-semibold text-gray-400"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`px-4 py-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <span className="text-sm text-red-500 mt-1">
                {errors.lastName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="email" className="mb-1 font-semibold text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-sm text-red-500 mt-1">{errors.email}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 mt-4 reveal">
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-full transition duration-300"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FanCard;
