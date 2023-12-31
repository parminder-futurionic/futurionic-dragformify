// src/DropZone.tsx
import React, { useState } from "react";
import {
  DraggableInputProps,
  useDraggableInputContext,
} from "./DraggableInputContext";
import DraggableInput from "./DraggableInput";

const Dropzone: React.FC = () => {
  // const [inputs, setInputs] = useState<DraggableInputProps[]>([]);
  const { selectedInput, setSelectedInput,updatedInputArray, inputs, setInputs } =
    useDraggableInputContext();
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);

  React.useEffect(() => {
    if (selectedInput) {
      const updatedInputs = inputs.map((input) =>
        input.id === selectedInput.id ? selectedInput : input
      );
      setInputs(updatedInputs);
    }
  }, [selectedInput]);

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    console.log("handleDragOver " + index);
    event.preventDefault();
    if (draggedIndex !== null && draggedIndex !== index) {
      setDropIndex(index);
    }
  };

  const handleDragLeave = () => {
    setDropIndex(null);
  };

  const handleRemoveInput = (index: number) => {
    setInputs(inputs.filter((_, i) => i !== index));
    setSelectedInput(null);
  };

  const handleDragStartInsideDropZone = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    // event.dataTransfer.setData("text/plain", "");
    console.log("Drag start Index: " + index);
    setDraggedIndex(index);
    setSelectedInput(inputs[index]);
  };

  const handleDropInsideDropZone = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(draggedIndex);
    if (draggedIndex !== null) {
      console.log("draggedIndex: " + draggedIndex);
      // Handle the reordering within the Dropzone
      const reorderedInputs = [...inputs];
      const [removed] = reorderedInputs.splice(draggedIndex, 1);
      console.log("dropIndex" + dropIndex);
      if (dropIndex === null) {
        // If dropIndex is null, it means the element was dropped outside the list
        // In this case, we can simply insert the element back at its original position
        reorderedInputs.splice(draggedIndex, 0, removed);
      } else {
        // Reordered according to dropIndex
        reorderedInputs.splice(dropIndex, 0, removed);
      }

      // Special case: dragged element is dropped at the beginning of the drop zone
      // if (dropIndex === 0) {
      //   reorderedInputs.unshift(removed);
      // }
      // // Special case: dragged element is dropped at the end of the drop zone
      // else if (dropIndex === inputs.length) {
      //   console.log("Dropping element last" + dropIndex + inputs.length);
      //   reorderedInputs.push(removed);
      // }
      // // Normal case: dragged element is dropped between elements
      // else {
      //   reorderedInputs.splice(dropIndex!, 0, removed);
      // }

      setInputs(reorderedInputs);
      setDraggedIndex(null);
      setDropIndex(null);
    }

    setSelectedInput(null);
  };

  const handleDropFromLeftSidebar = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    if (draggedIndex === null) {
      const data = event.dataTransfer.getData("text/plain");
      console.log("Dropped data:", data);
      let newInput;
      if (selectedInput) {
        newInput = {
          ...selectedInput,
          id: selectedInput.id + new Date().getTime(),
        };
      }
      // Calculate the drop index based on the position where the new element is dropped
      const dropElement = event.currentTarget;
      const { height, top } = dropElement.getBoundingClientRect();
      const offsetY = event.clientY - top;

      // Calculate the position relative to the drop zone
      const relativePosition = offsetY / height;

      // Calculate the index where the element should be inserted
      const newIndex = Math.round(relativePosition * inputs.length);

      // Insert the new element at the calculated drop index
      const updatedInputs = [...inputs];
      if (newInput) {
        updatedInputs.splice(newIndex, 0, { ...newInput });
      }
      setInputs(updatedInputs);

      setSelectedInput(null);
      setDropIndex(null);
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="border p-4  bg-white rounded-lg shadow-md"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDropFromLeftSidebar}
      onDragLeave={handleDragLeave}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ minHeight: "200px" }}
    >
      <div className="space-y-4">
        {updatedInputArray.map((input, index) => (
          <React.Fragment key={input.id}>
           
            <DraggableInput
              key={input.id}
              input={input}
              index={index}
              handleDragStart={handleDragStartInsideDropZone}
              handleDragOver={handleDragOver}
              handleDrop={handleDropInsideDropZone}
              handleRemoveInput={handleRemoveInput}
              setSelectedInput={setSelectedInput}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              isHovered={isHovered}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Dropzone;
