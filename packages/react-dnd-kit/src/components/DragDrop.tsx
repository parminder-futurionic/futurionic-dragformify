// DragDrop.tsx
import React from "react";
import { DragDropProps } from "./Draggable";
import DroppableComponent from "./DroppableComponent";
import DraggableComponent from "./DraggableComponent";

const DragDrop: React.FC<DragDropProps> = ({
  containerId,
  onDrop,
  acceptItemTypes,
  draggableProps,
  droppableProps,
}) => {
  return (
    <DroppableComponent
      containerId={containerId}
      onDrop={onDrop}
      acceptItemTypes={acceptItemTypes}
      {...droppableProps} // Spread the droppableProps
    >
      {draggableProps.map((draggableItem) => (
        <DraggableComponent
          key={draggableItem.customDragData.id}
          {...draggableItem}
        />
      ))}
    </DroppableComponent>
  );
};

export default DragDrop;
