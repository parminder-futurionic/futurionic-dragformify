import React  from "react";
import { Controller } from "react-hook-form";
import { InputProperty } from "../../constant/interface";
import CheckboxOrRadioGroup from "./CheckboxOrRadioGroup";
import SelectInput from "./SelectInput";
import ArrayInput from "./ArrayInput";

interface ControlledInputProps extends InputProperty {
  control: any;
}

const Input: React.FC<ControlledInputProps> = ({
  control,
  label,
  name,
  required = false,
  type = "text",
  placeholder,
  value,
  options,
  isReadOnly = false,
  isDisabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      rules={{}}
      render={({ field, fieldState: { error } }) => {
        if (type === "checkbox" || type === "radio") {
          return (
            <CheckboxOrRadioGroup
              type={type}
              label={label}
              options={options}
              field={field}
              required={required}
              isDisabled={isDisabled}
            />
          );
        }

        if (type === "select") {
          return (
            <SelectInput
              label={label}
              options={options}
              field={field}
              required={required}
              isDisabled={isDisabled}
            />
          );
        }

        if (type === "array") {
          return (
            <ArrayInput
              label={label}
              options={options}
              field={field}
              required={required}
              isDisabled={isDisabled}
            />
          );
        }
        return (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold">
                <span className="inline-flex items-center">
                  {label} {required && <span className="text-red-500">*</span>}
                </span>
              </label>
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
            </div>

            {!!error && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.message}
                </span>
              </label>
            )}
          </>
        );
      }}
    />
  );
};

export default Input;
