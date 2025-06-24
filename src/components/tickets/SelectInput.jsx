// src/components/SelectInput.jsx
import React, { useEffect, useState } from "react";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  showPriceInput = false,
  customPrice = "",
  onPriceChange = () => {},
}) => {
  const [updatedOptions, setUpdatedOptions] = useState([]);

  useEffect(() => {
    if (showPriceInput && customPrice && value) {
      const newOptions = options.map((opt) =>
        opt.value === value
          ? { ...opt, price: customPrice }
          : opt
      );
      setUpdatedOptions(newOptions);
    } else {
      setUpdatedOptions(options);
    }
  }, [customPrice, value, options]);

  return (
    <div className="mb-3 w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-semibold">
          {label}
        </label>
      )}

      {/* Dropdown Select */}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      >
        {updatedOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label} - ${opt.price || 0}
          </option>
        ))}
      </select>

      {/* Editable Price Input */}
      {showPriceInput && (
        <input
          type="number"
          placeholder="Enter custom price"
          value={customPrice}
          onChange={(e) => onPriceChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      )}
    </div>
  );
};

export default SelectInput;
