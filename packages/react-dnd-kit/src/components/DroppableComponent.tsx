import React, { useRef } from "react";
import { useDroppable, DroppableProps } from "./Draggable";

const DroppableComponent: React.FC<DroppableProps> = ({
  containerId,
  onDrop,
  acceptItemTypes,
  defaultTailwindClasses = "bg-gray-200 p-4 rounded-md",
  customTailwindClasses = "",
  className = "",
  style = {},
  children,
}) => {
  const droppableRef = useRef<HTMLDivElement>(null);
  const { isDragOver,isInvalidDrop,setIsInvalidDrop } = useDroppable({
    onDrop,
    acceptItemTypes,
  });

  const droppableClassNames = [
    defaultTailwindClasses,
    isDragOver ? "bg-blue-100" : "",
    isInvalidDrop ? "border-red-500" : "",
    customTailwindClasses,
    className,
  ]
    .join(" ")
    .trim();

  return (
    <div
      ref={droppableRef}
      className={droppableClassNames}
      style={style}
      data-container-id={containerId}
      onDrop={(e) => {
        e.preventDefault();
        setIsInvalidDrop(false)
        const data = e.dataTransfer.getData("application/json");
        if (data) {
          try {
            let parsedData = JSON.parse(data);
            if (
              (!acceptItemTypes ||
                acceptItemTypes.length === 0 ||
                acceptItemTypes.includes(parsedData.type)) &&
              onDrop &&
              containerId
            ) {
              onDrop(parsedData, containerId);
            } else {
              setIsInvalidDrop(true)
              console.log(
                "Drop not allowed for this item in the target container."
              );
            }
          } catch (error) {
            console.error("Error parsing dropped data:", error);
          }
        }
      }}
      role="group"
    >
      {children}
    </div>
  );
};

export default DroppableComponent;
