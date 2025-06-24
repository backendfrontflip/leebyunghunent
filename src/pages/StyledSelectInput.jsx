import React from "react";

const ticketOptions = [
  { label: "VIP Meet & Greet – $250", value: "VIP Meet & Greet" },
  { label: "Standard – $200", value: "Standard" },
  { label: "General – $150", value: "General" },
];

const StyledSelectInput = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Ticket Type
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none bg-white border border-gray-300 text-black py-2 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
      >
        {ticketOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        ▼
      </div>
    </div>
  );
};

export default StyledSelectInput;
