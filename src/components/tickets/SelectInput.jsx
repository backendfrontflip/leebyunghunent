// src/components/SelectInput.jsx
import React from "react";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [], // default to empty array
  required = false,
}) => {
  return (
    <div className="mb-3 w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-semibold">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 border border-gray-300 rounded"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
