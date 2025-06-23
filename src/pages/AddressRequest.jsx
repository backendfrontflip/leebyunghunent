import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from 'scrollreveal';

const AddressRequest = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !city || !state || !postalCode || !phoneNumber) {
      setMessage("❌ Please fill out all fields.");
      return;
    }

    // Proceed to confirmation page or process order
    setMessage("✅ Address saved successfully!");

    // Optionally, you can redirect to another page after saving the address
    setTimeout(() => {
      navigate("/cardpage"); // Redirect to order confirmation page
    }, 1000);
  };

  useEffect(() => {
    // ScrollReveal animations for the form and message
    ScrollReveal().reveal(".form-container", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      reset: true,
      easing: "ease-in-out",
      opacity: 0,
    });

    ScrollReveal().reveal(".message", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 400,
      reset: true,
      easing: "ease-in-out",
      opacity: 0,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center reveal">Enter Shipping Address</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto form-container"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border p-2 rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="State/Province"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border p-2 rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full border p-2 rounded text-black"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border p-2 rounded text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-6"
        >
          Save and Proceed
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm message">{message}</p>
      )}
    </div>
  );
};

export default AddressRequest;
