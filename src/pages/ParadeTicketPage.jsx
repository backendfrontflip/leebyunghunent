import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ticketPriceMap = {
  "VIP Meet & Greet": 250,
  "Standard": 200,
  "General": 150,
};

const ParadeTicketPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "VIP Meet & Greet",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, ticketType } = formData;

    if (!name || !email || !ticketType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Ticket reserved successfully!");
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    navigate("/cardpage");
  };

  const price = ticketPriceMap[formData.ticketType];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10">
      <ToastContainer />
      <div className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md">
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">
              🎟 SquidGame Parade Finale
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <div className="space-y-2">
                <p className="font-semibold">Select Ticket Type:</p>
                {Object.entries(ticketPriceMap).map(([type, cost]) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="ticketType"
                      value={type}
                      checked={formData.ticketType === type}
                      onChange={(e) =>
                        setFormData({ ...formData, ticketType: e.target.value })
                      }
                      className="accent-pink-600"
                    />
                    <span>
                      {type} - ${cost}
                    </span>
                  </label>
                ))}
              </div>

              <div className="text-center font-medium text-green-700">
                Selected Ticket: <span className="font-bold">${price}</span>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
              >
                Reserve Ticket
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-green-700">
              🎉 Reservation Successful!
            </h3>
            <p className="text-gray-800">
              Your <strong>{formData.ticketType}</strong> ticket (${price}) is ready.
            </p>
            <button
              onClick={handleContinue}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition"
            >
              Continue to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParadeTicketPage;
