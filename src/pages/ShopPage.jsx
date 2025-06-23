import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { merchItems, auctionItems, squidGameMerch, bookMerch } from '../shopData';
import formatPrice from '../utils/formatPrice';
import ScrollReveal from 'scrollreveal';

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Black', 'White', 'Red', 'Blue'];

const ShopPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('merch');
  const [cartItems, setCartItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('shopCart'));
    if (storedCart) setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('shopCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleOptionChange = (itemId, optionType, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [optionType]: value,
      },
    }));
  };

  const addToCart = (item) => {
    const options = selectedOptions[item.id] || {};
    const key = `${item.id}-${options.size || 'any'}-${options.color || 'any'}`;

    const existing = cartItems.find((cartItem) => cartItem.key === key);

    if (existing) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.key === key
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...item,
          key,
          size: options.size,
          color: options.color,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (key) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (key) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const itemsToDisplay =
    activeTab === 'merch'
      ? merchItems
      : activeTab === 'auction'
      ? auctionItems
      : activeTab === 'squid'
      ? squidGameMerch
      : bookMerch;

  useEffect(() => {
    const revealTimeout = setTimeout(() => {
      ScrollReveal().reveal('.reveal', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        reset: true,
        easing: 'ease-in-out',
        opacity: 0,
      });
    }, 100);

    return () => clearTimeout(revealTimeout);
  }, [activeTab]);

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center reveal">🛍️ Shop</h1>

      {/* Cart Section */}
      {cartItems.length > 0 && (
        <div className=" fixed top-20 left-0 right-0 z-10 bg-gray-900 p-6 rounded-lg shadow-md w-[400px] mx-auto">
          <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.key} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} {item.size && `(${item.size}/${item.color})`} x {item.quantity}
                </span>
                <div className="flex items-center space-x-2">
                  <button onClick={() => decreaseQuantity(item.key)} className="px-2 bg-gray-700 rounded">-</button>
                  <button onClick={() => increaseQuantity(item.key)} className="px-2 bg-gray-700 rounded">+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-center'>
          <button onClick={handleCheckout} className="mt-4 bg-red-500 w-60 py-2 rounded-full hover:bg-red-600">
            Proceed to Checkout
          </button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex justify-center mb-6 pt-32">
        {['merch', 'auction', 'squid', 'book'].map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${index === 0 ? 'rounded-l-full' : ''} ${index === 3 ? 'rounded-r-full' : ''} ${
              activeTab === tab ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itemsToDisplay.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-xl p-4 shadow-md max-w-sm mx-auto reveal">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-lg mb-2" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-300 mb-2">{item.description}</p>
            <p className="text-lg font-bold">{formatPrice(item.price)}</p>

            {activeTab === 'merch' && (
              <div className="my-2 space-y-2">
                <select
                  onChange={(e) => handleOptionChange(item.id, 'size', e.target.value)}
                  className="w-full bg-black border border-gray-600 p-1 rounded"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose Size
                  </option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <select
                  onChange={(e) => handleOptionChange(item.id, 'color', e.target.value)}
                  className="w-full bg-black border border-gray-600 p-1 rounded"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose Color
                  </option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button onClick={() => addToCart(item)} className="mt-2 bg-blue-600 w-full py-2 rounded hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
