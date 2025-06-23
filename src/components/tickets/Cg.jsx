import React from "react";
import { Link } from "react-router-dom"; 
import { FaLessThan } from "react-icons/fa6";

export default function Cg() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black">
      <div className="w-full max-w-md flex flex-col items-center">
        <img
          src="/tickets/chicago.jpg"
          alt="Los Angeles"
          className="border rounded-xl mb-6 w-full object-cover"
        />

        <Link to="/tickets">
          <button className="flex items-center gap-2 text-red-600 hover:text-red-800 border border-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition">
            <FaLessThan />
            Back to Tickets
          </button>
        </Link>
      </div>
    </div>
  );
}
