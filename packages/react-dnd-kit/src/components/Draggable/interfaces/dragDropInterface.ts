import { DraggableProps } from "./draggableInterface";
import { DroppableProps } from "./droppableInterface";

type dropPosistion = {
  x:number,
  y:number
}

export interface DragDropProps {
  containerId: string;
  onDrop: (data: any, targetContainerId: string , { x , y} :dropPosistion) => void;
  acceptItemTypes?: string[];
  draggableProps: Omit<DraggableProps[], "containerId" | "onDrop">;
  droppableProps: Omit<DroppableProps, "containerId" | "onDrop" | "children">;
}
