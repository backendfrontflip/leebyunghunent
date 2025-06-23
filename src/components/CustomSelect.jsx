import React, { useState } from 'react';

const CustomSelect = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false);

  const options = [
    { value: 'regular', label: 'Regular Membership Card - $650' },
    { value: 'vip', label: 'VIP Membership Card - $1,000' },
    { value: 'vvip', label: 'VVIP Membership Card - $1,500' },
  ];

  const handleSelect = (option) => {
    onChange({ target: { id: 'membershipType', value: option.value } });
    setOpen(false);
  };

  const selectedLabel = options.find(opt => opt.value === value)?.label || '-- Select Membership Type --';

  return (
    <div className="relative w-full sm:w-80 z-50"> {/* z-50 to stay above form */}
      <div
        className={`bg-black text-white border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-2xl p-4 cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        {selectedLabel}
      </div>

      {open && (
        <ul className="absolute left-0 right-0 mt-2 bg-black border border-gray-300 rounded-xl shadow-md z-50 max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="p-4 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
