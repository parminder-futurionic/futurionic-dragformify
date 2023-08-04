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
      rules={{}}
      render={({ field, fieldState: { error } }) => (
        <>
          <label
            htmlFor={name}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            type={type}
            value={field.value || value}
            disabled={isDisabled}
            onChange={(e) => {
              if (type === "checkbox") {
                field.onChange(e.target.checked);
              } else if (type === "radio") {
                field.onChange(e.target.checked);
              } else {
                field.onChange(e.target.value); 
              }
            }}
            ref={field.ref}
            placeholder={placeholder}
            className={`w-full px-3 py-2 text-slate-700 border rounded-md ${
              error ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-blue-500`}
            readOnly={isReadOnly}
          />
          {!!error && (
            <label className="label">
              <span className="label-text-alt text-error">{error.message}</span>
              {/* <span className="label-text-alt">Bottom Right label</span> */}
            </label>
          )}
        </>
      )}
    />
  );
};

export default Input;
