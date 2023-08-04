// src/DraggableField.tsx
import React from "react";
import {
  DraggableInputProps,
  useDraggableInputContext,
} from "./DraggableInputContext";
import { InputIcon } from "../assets/SvgIcons/InputIcon";
import { PasswordIcon } from "../assets/SvgIcons/PasswordIcon";
import { EmailIcon } from "../assets/SvgIcons/EmailIcon";

interface IInputComponentIcon {
  [key: string]: JSX.Element;
}

const InputComponentIcon: IInputComponentIcon = {
  textInput: <InputIcon fill="#fff" />,
  passwordInput: <PasswordIcon fill="#fff" />,
  emailInput: <EmailIcon fill="#fff" />,
};

const DraggableField: React.FC<DraggableInputProps> = (props) => {
  const { setSelectedInput } = useDraggableInputContext();

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
    event.dataTransfer.setData("text/plain", JSON.stringify(props));
    setSelectedInput(props);
  };

  return (
    <>
      <div
        draggable
        onDrag={handleDragStart}
        className="relative group flex items-center p-2 transition bg-indigo-50 border border-gray-200 rounded-md cursor-move my-4 shadow-md hover:shadow-lg transform hover:scale-105"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-10 backdrop-blur-lg shadow-md rounded-md"></div>
        <div className="z-20 relative bg-indigo-500 text-white rounded-full p-1 mr-3 group-hover:bg-indigo-700">
          {InputComponentIcon[`${props.icon}`]}
        </div>
        <div className="z-10 relative">
          <p
            className={`text-lg font-medium text-gray-800 group-hover:text-indigo-800`}
          >
            {props.label}
          </p>
        </div>
      </div>
    </>
  );
};

export default DraggableField;
