import React from "react";

const CheckboxOrRadioGroup: React.FC<{
  type: "checkbox" | "radio";
  label: string;
  options: string[];
  field: any;
  required: boolean;
  isDisabled: boolean;
}> = ({ type, label, options, field, required, isDisabled }) => {
  return (
    <div
      className={`flex ${
        options ? "flex-col  justify-between" : "flex-row  justify-between"
      } mb-4`}
    >
      <label className="block text-gray-700 text-sm font-bold">
        <span className="inline-flex items-center">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>

      {Array.isArray(options) ? (
        options.map((option: any) => (
          <div key={option} className="flex items-center">
            <input
              type={type}
              value={option}
              checked={
                type === "radio"
                  ? field.value === option
                  : field.value.includes(option)
              }
              disabled={isDisabled}
              onChange={() => {
                if (type === "checkbox") {
                  const updatedValue = field.value.includes(option)
                    ? field.value.filter((v: string) => v !== option)
                    : [...field.value, option];
                  field.onChange(updatedValue);
                } else {
                  field.onChange(option);
                }
              }}
              className="mr-2 text-primary"
            />
            <span>{option}</span>
          </div>
        ))
      ) : (
        <input
          type={type}
          checked={field.value}
          disabled={isDisabled}
          onChange={(e) => field.onChange(e.target.checked)}
          ref={field.ref}
          className="ml-5 text-primary"
        />
      )}
    </div>
  );
};

export default CheckboxOrRadioGroup;
