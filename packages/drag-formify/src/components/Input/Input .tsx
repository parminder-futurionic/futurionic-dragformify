import React from "react";
import { Controller } from "react-hook-form";
import { InputProperty } from "../../constant/interface";

export interface ControlledInput extends InputProperty {
  control: any;
}

const Input: React.FC<ControlledInput> = ({
  control,
  label,
  name,
  required = false,
  type = "text",
  placeholder,
  value,
  options = [], // Added options prop for select type
  isReadOnly = false,
  isDisabled = false,
}) => {
  const [dynamicOptions, setDynamicOptions] = React.useState<string[]>(options);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      rules={{}}
      render={({ field, fieldState: { error } }) => {
        const handleOptionChange = (index: number, newValue: string) => {
          const updatedOptions = [...dynamicOptions];
          updatedOptions[index] = newValue;
          setDynamicOptions(updatedOptions);
          field.onChange(updatedOptions); // Update the field value when options change
        };

        const addOption = () => {
          const updatedOptions = [...dynamicOptions, ""];
          setDynamicOptions(updatedOptions);
          field.onChange(updatedOptions); // Update the field value when options change
        };

        return (
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor={name}
                className="block text-gray-700 text-sm font-bold"
              >
                <span className="inline-flex items-center">
                  {label} {required && <span className="text-red-500">*</span>}
                </span>
              </label>
              {(type === "checkbox" || type === "radio") && (
                <div>
                  {Array.isArray(options) ? (
                    // For multiple selections
                    options.map((option: any) => (
                      <div key={option} className="flex items-center">
                        <input
                          type={type}
                          value={option}
                          checked={
                            type === "radio"
                              ? field.value === option
                              : field.value.includes(option)
                          } // Check if option is in field.value array
                          disabled={isDisabled}
                          onChange={() => {
                            console.log("Field", field.value);
                            if (type === "checkbox") {
                              const updatedValue = field.value.includes(option)
                                ? field.value.filter(
                                    (v: string) => v !== option
                                  )
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
              )}{" "}
            </div>

            {type === "select" && ( // Handle select type
              <select
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                ref={field.ref}
                className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:border-primary"
                disabled={isDisabled}
              >
                {options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {type === "array" && (
              <div className="flex flex-col">
                {dynamicOptions.map((option: string, index: number) => (
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
            )}
            {type !== "checkbox" &&
              type !== "radio" &&
              type !== "select" &&
              type !== "array" && (
                <input
                  type={type}
                  value={field.value || value}
                  disabled={isDisabled}
                  onChange={(e) => field.onChange(e.target.value)}
                  ref={field.ref}
                  placeholder={placeholder}
                  className={`w-full px-3 py-2 mt-2 text-gray-700 border rounded-md ${
                    error ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-primary`}
                  readOnly={isReadOnly}
                  min={0}
                />
              )}
            {!!error && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.message}
                </span>
              </label>
            )}
          </div>
        );
      }}
    />
  );
};

export default Input;
