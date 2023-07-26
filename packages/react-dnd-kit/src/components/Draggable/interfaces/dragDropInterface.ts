import { DraggableProps } from "./draggableInterface";
import { DroppableProps } from "./droppableInterface";

export interface DragDropProps {
  containerId: string;
  onDrop: (data: any, targetContainerId: string) => void;
  acceptItemTypes?: string[];
  draggableProps: Omit<DraggableProps[], "containerId" | "onDrop">;
  droppableProps: Omit<DroppableProps, "containerId" | "onDrop" | "children">;
}
