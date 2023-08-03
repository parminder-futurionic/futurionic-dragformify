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
  const [showDropPosition, setShowDropPosition] = React.useState(false);
  const [dropPosition, setDropPosition] = React.useState<{
    x: number;
    y: number;
  } | null>(null);
  const {
    isDragOver,
    isInvalidDrop,
    setIsInvalidDrop,
    droppableRef,
    draggedElementPosition,
    setDraggedElementPosition,
  } = useDroppable({
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

    const handleDragOver = (e : React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setShowDropPosition(true);
      const droppableRect = droppableRef.current!.getBoundingClientRect();
      const containerTop = droppableRect.top;
      const containerBottom = droppableRect.bottom;
      const containerLeft = droppableRect.left;
      const containerRight = droppableRect.right;
    
      let dropX = e.clientX;
      let dropY = e.clientY;
    
      // Ensure the drop position is inside the container horizontally
      if (dropX < containerLeft) {
        dropX = containerLeft;
      } else if (dropX > containerRight) {
        dropX = containerRight;
      }
    
      // Ensure the drop position is inside the container vertically
      if (dropY < containerTop) {
        dropY = containerTop;
      } else if (dropY > containerBottom) {
        dropY = containerBottom;
      }
    
      dropX -= containerLeft;
      dropY -= containerTop;
      setDropPosition({ x: dropX, y: dropY });
    };

  return (
    <div
      ref={droppableRef}
      className={droppableClassNames}
      style={style}
      data-container-id={containerId}
      onDrop={(e) => {
        e.preventDefault();
        setIsInvalidDrop(false);
        const data = e.dataTransfer.getData("application/json");
        if (data) {
          try {
            let parsedData = JSON.parse(data);
            if (
              (!acceptItemTypes ||
                acceptItemTypes.length === 0 ||
                acceptItemTypes.includes(parsedData.type)) &&
              onDrop &&
              containerId &&
              droppableRef.current
            ) {
              const droppableRect =
                droppableRef.current.getBoundingClientRect();
              const dropX = e.clientX - droppableRect.left;
              const dropY = e.clientY - droppableRect.top;

              onDrop(parsedData, containerId, { x: dropX, y: dropY });
            } else {
              setIsInvalidDrop(true);
              console.log(
                "Drop not allowed for this item in the target container."
              );
            }
            setShowDropPosition(false);
            setDropPosition(null);
          } catch (error) {
            console.error("Error parsing dropped data:", error);
          }
        }
      }}
      onDragOver={handleDragOver}
      onDragLeave={() => {
        setShowDropPosition(false);
        setDropPosition(null);
      }}
      role="group"
    >
      {showDropPosition && dropPosition && (
        <div
          style={{
            position: "absolute",
            left: dropPosition.x,
            top: dropPosition.y,
            border: "2px dashed blue",
            width: "100px",
            height: "50px",
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </div>
  );
};

export default DroppableComponent;
