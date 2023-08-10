import React from "react";
import { Controller } from "react-hook-form";
import { InputProperty } from "../InputProperty";

// id: string;
//   title: string;
//   name: string;
//   type: string;
//   placeholder: string;
//   minLength?: number;
//   maxLength?: number;
//   required: boolean;
//   value: string | number | boolean;
//   isReadOnly: boolean;
//   isDisabled: boolean;

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
  isReadOnly = false,
  isDisabled = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      rules={{
      }}
      render={({ field, fieldState: { error } }) => (
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor={name}
              className="block text-gray-700 text-sm font-bold"
            >
              <span className="inline-flex items-center">
                {label} {required && <span className="text-red-500">*</span>}
                {type === "checkbox" || type === "radio" ? (
                  <input
                    type={type}
                    checked={field.value}
                    disabled={isDisabled}
                    onChange={(e) => field.onChange(e.target.checked)}
                    ref={field.ref}
                    className="ml-5 text-primary"
                  />
                ) : null}
              </span>
            </label>
            {!!error && (
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {error.message}
                </span>
              </label>
            )}
          </div>
          {type !== "checkbox" && type !== "radio" && (
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
        </div>
      )}
    />
  );
};

export default Input;
