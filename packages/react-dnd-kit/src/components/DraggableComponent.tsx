import React, { useRef } from "react";
import { DraggableProps, useDraggable } from "./Draggable";



const DraggableComponent: React.FC<DraggableProps> = ({
  children,
  defaultClassName = "bg-blue-500 text-white p-2 rounded-md",
  additionalClassName = "",
  disableDragging = false,
  customDragData,
  dragImage,
  dragHandleSelectors,
  dragStartThreshold,
  preventTouchScroll,
  disableDraggingOnMobile,
  onDragStart,
  onDragEnd,
  onCustomDragStart,
  onCustomDragEnd,
  as = "div",
}) => {
  const draggableRef = useRef<HTMLDivElement>(null);
  const { isDragging } = useDraggable({
    onDragStart,
    onDragEnd,
    onCustomDragStart,
    onCustomDragEnd,
    customDragData,
    dragImage,
    dragHandleSelectors,
    dragStartThreshold,
    preventTouchScroll,
    disableDraggingOnMobile,
  });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (disableDragging) {
      e.preventDefault();
      return;
    }

    if (customDragData) {
      try {
        e.dataTransfer.setData(
          "application/json",
          JSON.stringify(customDragData)
        );
      } catch (error) {
        console.error("Error setting custom data during drag:", error);
      }
    }

    if (dragImage) {
      const dragImg = new Image();
      dragImg.src = dragImage;
      e.dataTransfer.setDragImage(dragImg, 0, 0);
    }

    // Set aria-grabbed attribute when starting the drag
    draggableRef.current?.setAttribute("aria-grabbed", "true");

    if (onDragStart) {
      onDragStart();
    }
    if (onCustomDragStart) {
      onCustomDragStart();
    }
  };

  const handleDragEnd = () => {
    // Reset aria-grabbed attribute when drag ends
    draggableRef.current?.setAttribute("aria-grabbed", "false");

    if (onDragEnd) {
      onDragEnd();
    }
    if (onCustomDragEnd) {
      onCustomDragEnd();
    }
  };

  const draggableClassNames = [
    defaultClassName,
    isDragging ? "opacity-50" : "",
    additionalClassName,
    disableDragging ? "pointer-events-none" : "",
  ]
    .join(" ")
    .trim();

  return React.createElement(
    as,
    {
      ref: draggableRef,
      draggable: !disableDragging,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      className: draggableClassNames,
      role: "option",
      tabIndex: 0,
      "aria-grabbed": isDragging ? "true" : "false",
      "aria-disabled": disableDragging,
    },
    children
  );
};

export default DraggableComponent;
