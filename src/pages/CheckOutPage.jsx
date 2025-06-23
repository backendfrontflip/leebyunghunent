import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("shopCart");
    return saved ? JSON.parse(saved) : [];
  });

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("shopCart", JSON.stringify(newCart));
  };

  const changeQuantity = (key, delta) => {
    const updatedCart = cart.map((item) =>
      item.key === key
        ? { ...item, quantity: Math.max((item.quantity || 1) + delta, 1) }
        : item
    );
    updateCart(updatedCart);
  };

  const removeItem = (key) => {
    const updatedCart = cart.filter((item) => item.key !== key);
    updateCart(updatedCart);
  };

  const getTotal = () =>
    cart.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );

  // ScrollReveal effect
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      delay: 200,
      reset: true,
      easing: "ease-in-out",
      opacity: 0,
    });
  }, []);

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-3xl font-bold text-center mb-8 reveal">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-400 reveal">
          <p>Your cart is empty.</p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
          >
            Return to Shop
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item, index) => (
            <div
              key={item.key}
              className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-blue-400">
                  ${item.price?.toFixed(2)} × {item.quantity || 1}
                </p>
                {item.size && (
                  <p className="text-sm text-gray-300">
                    Size: {item.size}, Color: {item.color}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeQuantity(item.key, -1)}
                  className="px-2 py-1 bg-gray-700 rounded text-lg"
                >
                  -
                </button>
                <span>{item.quantity || 1}</span>
                <button
                  onClick={() => changeQuantity(item.key, 1)}
                  className="px-2 py-1 bg-gray-700 rounded text-lg"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.key)}
                  className="ml-3 text-red-400 hover:text-red-600 text-xl"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6 reveal">
            <p className="text-xl font-bold mb-4">
              Total: ${getTotal().toFixed(2)}
            </p>
            <button
              onClick={() => navigate("/addressrequest")}
              className="px-8 py-3 bg-red-600 hover:bg-green-700 text-white rounded-full text-lg"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
