import React from "react";

interface Option {
  value: string;
  label: string;
}

const SelectInput: React.FC<{
  label: string;
  options: Option[];
  field: any;
  required: boolean;
  isDisabled: boolean;
}> = ({ label, options, field, required, isDisabled }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">
        <span className="inline-flex items-center">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <select
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        ref={field.ref}
        className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:border-primary"
        disabled={isDisabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
