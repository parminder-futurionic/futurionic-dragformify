// src/DraggableField.tsx
import React from "react";
import {
  DraggableInputProps,
  useDraggableInputContext,
} from "./DraggableInputContext";
import { InputIcon } from "../assets/SvgIcons/InputIcon";
import { PasswordIcon } from "../assets/SvgIcons/PasswordIcon";
import { EmailIcon } from "../assets/SvgIcons/EmailIcon";
import { HeadingIcon } from "../assets/SvgIcons/HeadingIcon";
import { DatePickerIcon } from "../assets/SvgIcons/DatePickerIcon";
import { RadioInputIcon } from "../assets/SvgIcons/RadioInputIcon";
import { CheckboxInputIcon } from "../assets/SvgIcons/CheckboxInputIcon";

interface IconProps {
  size?: string;
  fill?: string;
  className?: string;
}

interface IInputComponentIcon {
  [key: string]: React.FC<IconProps>;
}

const InputComponentIcon: IInputComponentIcon = {
  textInput: InputIcon,
  passwordInput: PasswordIcon,
  emailInput: EmailIcon,
  heading:HeadingIcon,
  datePicker: DatePickerIcon,
  radioInput: RadioInputIcon,
  checkboxInput:CheckboxInputIcon
};

const DraggableField: React.FC<DraggableInputProps> = (props) => {
  const { setSelectedInput } = useDraggableInputContext();

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
    event.dataTransfer.setData("text/plain", JSON.stringify(props));
    setSelectedInput(props);
  };

  const IconComponent = InputComponentIcon[`${props.icon}`];

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        draggable
        onDrag={handleDragStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative group flex flex-col items-center p-2 transition bg-white border border-gray-200  cursor-move shadow-md hover:shadow-lg transform hover:scale-105"
      >
        <div className="z-20 relative bg-white text-black rounded-full p-2 mb-1  group-hover:text-primary">
          <IconComponent
            fill={isHovered ? "#8b5cf6" : "#333"}
            className="transition-fill duration-300"
          />
        </div>
        <div className="z-10 relative">
          <p
            className={`text-xs font-normal text-gray-800 group-hover:text-primary`}
          >
            {props.label}
          </p>
        </div>
      </div>
    </>
  );
};

export default DraggableField;
