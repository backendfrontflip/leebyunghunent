import React from 'react';
import formatPrice from '../utils/formatPrice';

const BookCard = ({ book, onAddToCart }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md max-w-sm mx-auto">
      <img
        src={book.image}
        alt={book.name}
        className="w-full h-72 object-cover rounded-lg mb-3"
      />
      <h3 className="text-xl font-semibold">{book.name}</h3>
      <p className="text-sm text-gray-300 mb-2">{book.description}</p>
      <p className="text-lg font-bold">{formatPrice(book.price)}</p>
      <button
        onClick={() => onAddToCart(book)}
        className="mt-2 bg-blue-600 w-full py-2 rounded hover:bg-blue-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
