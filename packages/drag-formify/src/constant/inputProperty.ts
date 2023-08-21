
import { component } from "./enum";
import { InputItem } from "./interface";

export const inputItem: InputItem[] = [
  {
    id: "input_text",
    label: "Text input",
    icon: "textInput",
    name: "textInput",
    component: component.INPUT_COMPONENT,
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
    component: component.INPUT_COMPONENT,
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
    component: component.INPUT_COMPONENT,
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
  {
    id: "input_date",
    label: "Date Picker",
    icon: "datePicker",
    name: "dateInput",
    component: component.INPUT_COMPONENT,
    property: [
      {
        id: "input_label",
        label: "Label",
        name: "label",
        type: "text",
        placeholder: "Enter the Label",
        minLength: 1,
        required: false,
        value: "",
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_placeholder",
        label: "Placeholder",
        name: "placeholder",
        type: "text",
        placeholder: "Enter the Placeholder",
        value: "",
        required: false,
        isReadOnly: false,
        isDisabled: false,
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
        id: "input_type",
        label: "Type",
        name: "type",
        type: "text",
        placeholder: "Enter the Type",
        minLength: 1,
        value: "date",
        required: false,
        isReadOnly: true,
        isDisabled: true,
      },
      {
        id: "input_date_format",
        label: "Date Format",
        name: "dateFormat",
        type: "text",
        placeholder: "Enter the Date Format",
        value: "YYYY-MM-DD",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_date_min",
        label: "Minimum Date",
        name: "minDate",
        type: "date",
        placeholder: "Minimum Date",
        value: "",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_date_max",
        label: "Maximum Date",
        name: "maxDate",
        type: "date",
        value: "",
        placeholder: "Max date",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_date_default",
        label: "Default Date",
        name: "defaultDate",
        type: "date",
        value: "",
        placeholder: "Default Date",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_date_show_time",
        label: "Show Time",
        name: "showTime",
        type: "checkbox",
        placeholder: "Show Time",
        required: false,
        value: false,
        isReadOnly: false,
        isDisabled: false,
      },
      // {
      //   id: "input_date_start_week",
      //   label: "Start Week On",
      //   name: "startWeekOn",
      //   type: "select",
      //   options: [
      //     { value: "sunday", label: "Sunday" },
      //     { value: "monday", label: "Monday" },
      //   ],
      //   required: false,
      //   value: "sunday",
      //   isReadOnly: false,
      //   isDisabled: false,
      // },
      // {
      //   id: "input_date_disabled_dates",
      //   label: "Disabled Dates",
      //   name: "disabledDates",
      //   type: "array",
      //   value: [],
      //   required: false,
      //   isReadOnly: false,
      //   isDisabled: false,
      // },
      {
        id: "input_date_disable_past_from",
        label: "Disable Past Dates From",
        name: "disablePastFrom",
        type: "date",
        value: "",
        placeholder: "Enable past dates",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_date_disable_future_from",
        label: "Disable Future Dates From",
        name: "disableFutureFrom",
        type: "date",
        placeholder:"Enter a future date",
        value: "",
        required: false,
        isReadOnly: false,
        isDisabled: false,
      },
      // Add more properties as needed
    ],
  },
  {
    id: "input_radio",
    label: "Radio input",
    icon: "radioInput",
    name: "radioInput",
    component: component.INPUT_COMPONENT,
    property: [
      {
        id: "input_label",
        label: "Label",
        name: "label",
        type: "text",
        placeholder: "Enter the Label",
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
        value: "radio",
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
        id: "input_options",
        label: "Options",
        name: "options",
        type: "array",
        placeholder: "Options",
        value: [],
        required: true,
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_orientation",
        label: "Orientation",
        name: "orientation",
        type: "select",
        placeholder: "Orientation",
        options: [
          { value: "horizontal", label: "Horizontal" },
          { value: "vertical", label: "Vertical" },
        ],
        required: false,
        value: "vertical",
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_default_value",
        label: "Default Value",
        name: "defaultValue",
        type: "text",
        placeholder: "Enter the Default Value",
        required: false,
        value: "",
        isReadOnly: false,
        isDisabled: false,
      },
      {
        id: "input_inline",
        label: "Inline Display",
        name: "inlineDisplay",
        type: "checkbox",
        placeholder: "Display options inline",
        required: false,
        value: false,
        isReadOnly: false,
        isDisabled: false,
      },
      // Add more properties as needed
    ],
  }
  
  
];


