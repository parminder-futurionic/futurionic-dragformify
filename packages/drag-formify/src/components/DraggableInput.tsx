// src/DraggableInput.tsx
import React, { useState } from "react";

import { DraggableInputProps } from "./DraggableInputContext";
import { DeleteIconSVG } from "../assets/SvgIcons/Delete";

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
  setSelectedInput: (input: DraggableInputProps) => void;
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
  isHovered
}) => {
  return (
    <div
      key={index}
      className="p-4 flex flex-col bg-white border rounded-lg shadow-md cursor-move m-1 w-full transition duration-300 ease-in-out transform hover:scale-105"
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
      <label className="block text-sm font-medium">
        {input.label}
        {input.property.find((val) => val.name === "required")?.value && (
          <span className="text-red-500 m-1">*</span>
        )}
      </label>
      <div className="flex py-2 items-center w-full">
        <input
          className="bg-white p-1 border rounded w-full"
          type="text"
          readOnly
        />
        <button
          onClick={() => handleRemoveInput(index)}
          className={`ml-1 p-2  text-white font-bold rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out  hover:bg-red-200`}
        >
          <DeleteIconSVG isHovered={isHovered} fill="#EF4444" />
        </button>
      </div>
    </div>
  );
};

export default DraggableInput;
