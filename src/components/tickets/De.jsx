import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SelectInput from "./SelectInput";
import Det from "../../assets/de.jpg";

export default function De() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "Regular",
    eventLocation: "New York", // ✅ New field
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, ticketType, eventLocation } = formData;

    if (!name.trim() || !email.trim() || !ticketType.trim() || !eventLocation.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Submitted successfully!");
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    navigate("/cardpage");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      <ToastContainer />
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Image */}
        <div className="relative w-full">
          <img
            src={Det}
            alt="Detroit"
            className="border rounded-xl w-full object-cover"
          />

          {/* Overlay Form / Continue */}
          {showOverlay && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-xl p-4 transition-opacity duration-1000">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white text-black p-4 rounded-xl shadow-lg w-full max-w-sm"
                >
                  <h3 className="text-lg font-bold mb-3">Reserve Your Spot</h3>

                  {/* ✅ Event Location Select */}
                  <select
                    value={formData.eventLocation}
                    onChange={(e) =>
                      setFormData({ ...formData, eventLocation: e.target.value })
                    }
                    className="w-full mb-3 p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Seoul">Seoul</option>
                    <option value="Tokyo">Tokyo</option>
                  </select>

                  {/* Ticket Type Select */}
                  <SelectInput />

                  {/* Name Input */}
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    required
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full mb-3 p-2 border border-gray-300 rounded"
                    required
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <button
                  onClick={handleContinue}
                  className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition text-lg font-semibold"
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>

        {/* Back Button */}
        <Link to="/tickets" className="mt-6">
          <button className="flex items-center gap-2 text-red-600 hover:text-red-800 border border-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition">
            <FaLessThan />
            Back to Tickets
          </button>
        </Link>
      </div>
    </div>
  );
}
