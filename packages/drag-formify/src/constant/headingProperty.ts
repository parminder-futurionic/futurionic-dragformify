
import { component } from "./enum";
import { HeadingItem } from "./interface";

export const headingItem: HeadingItem[] = [
    {
      id: "heading_text",
      label: "Form Heading",
      component: component.HEADING_COMPONENT,
      icon: "heading",
      name: "headingForm",
      property: [
        {
          id: "input_heading",
          label: "Heading",
          name: "heading",
          type: "text",
          placeholder: "Enter  the Heading",
          minLength: 1,
          required: false,
          value: "Form Heading",
          isReadOnly: false,
          isDisabled: false,
        },
        {
          id: "input_subheading",
          label: "Sub Heading",
          name: "subheading",
          type: "text",
          placeholder: "Enter  the Sub heading",
          minLength: 1,
          value: "Sub Heading",
          required: false,
          isReadOnly: false,
          isDisabled: false,
        },
      ],
    },
  ];