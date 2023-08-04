export interface InputItem {
  id: string;
  label: string;
  icon: string;
  name: string;
  property: InputProperty[];
}

export interface InputProperty {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  required: boolean;
  value: string | number | boolean;
  isReadOnly: boolean;
  isDisabled: boolean;
}

function generateUniqueId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${random}`;
}

export const inputItem: InputItem[] = [
  {
    id: "input_text",
    label: "Text input",
    icon: "textInput",
    name: "textInput",
    property: [
      {
        id: "input_label",
        label: "Label",
        name: "label",
        type: "text",
        placeholder: "Enter  the Label",
        minLength: 1,
        required: false,
        value: "",
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_type",
        label: "Type",
        name: "type",
        type: "text",
        placeholder: "Enter  the Label",
        minLength: 1,
        value: "text",
        required: false,
        isReadOnly: true,
        isDisabled: true,
      },
      {
        id: "input_required",
        label: "Required",
        name: "required",
        type: "checkbox",
        placeholder: "Required",
        required: false,
        value: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_placeholder",
        label: "Placeholder",
        name: "placeholder",
        type: "text",
        placeholder: "Enter  the placeholder",
        value: "",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_minLength",
        label: "Min length",
        name: "minLength",
        type: "number",
        placeholder: "Enter  the Minimum Length",
        value: 0,
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_maxLength",
        label: "Max length",
        name: "maxLength",
        type: "number",
        placeholder: "Enter  the Maximum Length",
        value: 0,
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
    ],
  },
  {
    id: "input_password",
    label: "Password input",
    icon: "passwordInput",
    name: "passwordInput",
    property: [
      {
        id: "input_label",
        label: "Label",
        name: "label",
        type: "text",
        placeholder: "Enter  the Label",
        minLength: 1,
        required: false,
        value: "",
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_type",
        label: "Type",
        name: "type",
        type: "text",
        placeholder: "Enter  the Label",
        minLength: 1,
        value: "password",
        required: false,
        isReadOnly: true,
        isDisabled: true,
      },
      {
        id: "input_required",
        label: "Required",
        name: "required",
        type: "checkbox",
        placeholder: "Required",
        required: false,
        value: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_placeholder",
        label: "Placeholder",
        name: "placeholder",
        type: "text",
        placeholder: "Enter  the placeholder",
        value: "",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_minLength",
        label: "Min length",
        name: "minLength",
        type: "number",
        placeholder: "Enter  the Minimum Length",
        value: 0,
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_maxLength",
        label: "Max length",
        name: "maxLength",
        type: "number",
        placeholder: "Enter  the Maximum Length",
        value: 0,
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
    ],
  },
  {
    id: "input_email",
    label: "Email input",
    icon: "emailInput",
    name: "emailInput",
    property: [
      {
        id: "input_label",
        label: "Label",
        name: "label",
        type: "text",
        placeholder: "Enter  the Label",
        minLength: 1,
        required: false,
        value: "",
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_type",
        label: "Type",
        name: "type",
        type: "text",
        placeholder: "Enter  the Type",
        minLength: 1,
        value: "email",
        required: false,
        isReadOnly: true,
        isDisabled: true,
      },
      {
        id: "input_required",
        label: "Required",
        name: "required",
        type: "checkbox",
        placeholder: "Required",
        required: false,
        value: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_placeholder",
        label: "Placeholder",
        name: "placeholder",
        type: "text",
        placeholder: "Enter  the placeholder",
        value: "",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_minLength",
        label: "Min length",
        name: "minLength",
        type: "number",
        placeholder: "Enter  the Minimum Length",
        value: 0,
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_maxLength",
        label: "Max length",
        name: "maxLength",
        type: "number",
        placeholder: "Enter  the Maximum Length",
        value: 0,
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
    ],
  },
];
