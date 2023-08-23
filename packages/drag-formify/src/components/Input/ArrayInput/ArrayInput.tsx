import React from "react";

const ArrayInput: React.FC<{
  label: string;
  options: string[];
  required: boolean;
  isDisabled: boolean;
  field: any;
}> = ({ label, options, field, required, isDisabled }) => {
  const [dynamicOptions, setDynamicOptions] = React.useState<string[]>(options);

  const handleOptionChange = (index: number, newValue: string) => {
    const updatedOptions = [...dynamicOptions];
    updatedOptions[index] = newValue;
    setDynamicOptions(updatedOptions);
    field.onChange(updatedOptions);
  };

  const addOption = () => {
    const updatedOptions = [...dynamicOptions, ""];
    setDynamicOptions(updatedOptions);
    field.onChange(updatedOptions);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold">
        <span className="inline-flex items-center">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <div className="flex flex-col">
        {dynamicOptions.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => {
              handleOptionChange(index, e.target.value);
            }}
            className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:border-primary"
            placeholder={`Option ${index + 1}`}
            disabled={isDisabled}
          />
        ))}
        <button
          type="button"
          onClick={addOption}
          className="mt-2 text-sm text-primary hover:underline focus:outline-none"
        >
          Add Option
        </button>
      </div>
    </div>
  );
};

export default ArrayInput;
