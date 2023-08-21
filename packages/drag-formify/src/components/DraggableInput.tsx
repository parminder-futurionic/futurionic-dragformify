import React from "react";

import {
  DraggableInputProps,
  useDraggableInputContext,
} from "./DraggableInputContext";
import { DeleteIconSVG } from "../assets/SvgIcons/Delete";
import { component } from "../constant/enum";

const DraggableInput: React.FC<{
  input: DraggableInputProps;
  index: number;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => void;
  handleDragOver: (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleRemoveInput: (index: number) => void;
  setSelectedInput: (input: DraggableInputProps | null) => void;
  handleMouseEnter: (event: React.MouseEvent) => void;
  handleMouseLeave: (event: React.MouseEvent) => void;
  isHovered?: boolean;
}> = ({
  input,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleRemoveInput,
  setSelectedInput,
  handleMouseEnter,
  handleMouseLeave,
  isHovered,
}) => {
  const { selectedInput } = useDraggableInputContext();

  const onDeleteInput = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event propagation
    handleRemoveInput(index);
    setSelectedInput(null);
  };

  return (
    <div
      key={index}
      className={`p-4 flex flex-col  rounded-lg  cursor-move m-1 w-full transition duration-300 ease-in-out transform hover:scale-90 ${
        selectedInput !== null && selectedInput.id === input.id
          ? "border border-primary shadow-md"
          : "" // Apply border when isSelected is true
      }`}
      draggable
      onDragStart={(event) => handleDragStart(event, index)}
      onDrop={handleDrop}
      onDragOver={(event) => handleDragOver(event, index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        setSelectedInput(input);
      }}
    >
      <label
        className={`${
          input.component !== component.HEADING_COMPONENT
            ? "block text-sm font-medium"
            : "block text-lg font-bold mb-4"
        }`}
      >
        {input.label}
        {input.property.find((val) => val.name === "required")?.value && (
          <span className="text-red-500 m-1">*</span>
        )}
      </label>
      {input.component === component.HEADING_COMPONENT && (
        <div className="flex py-2 items-center w-full justify-between">
          {" "}
          <p className="text-gray-500 mt-1">
            {input.property.find((val) => val.name === "subheading")?.value}
          </p>
          <button
            onClick={(e) => onDeleteInput(e, index)}
            className={`ml-1 p-2  text-white font-bold rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out  hover:bg-red-200`}
          >
            <DeleteIconSVG isHovered={isHovered} fill="#EF4444" />
          </button>
        </div>
      )}
      {input.component !== component.HEADING_COMPONENT && (
        <div className="flex py-2 items-center w-full">
          <input
            className="bg-white p-1 border rounded w-full"
            type="text"
            readOnly
          />
          <button
            onClick={(e) => onDeleteInput(e, index)}
            className={`ml-1 p-2  text-white font-bold rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out  hover:bg-red-200`}
          >
            <DeleteIconSVG isHovered={isHovered} fill="#EF4444" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DraggableInput;
