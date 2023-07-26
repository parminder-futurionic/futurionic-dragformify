export interface UseDroppableOptions {
  onDrop?: (data: any, targetContainerId: string) => void;
  onDragEnter?: () => void;
  onDragLeave?: () => void;
  onDragOver?: () => void;
  onDragEnd?: () => void;
  acceptItemTypes?: string[]; // Array of accepted item types
  disableDropping?: boolean; // Disable dropping items into the container
}

export interface DroppableProps {
  containerId: string;
  onDrop?: (data: any, targetContainerId: string) => void;
  acceptItemTypes?: string[]; // Array of accepted item types
  defaultTailwindClasses?: string; // Default Tailwind CSS classes for the droppable container
  customTailwindClasses?: string; // Custom Tailwind CSS classes for overriding or adding styles
  className?: string; // Additional CSS classes for the droppable container
  style?: React.CSSProperties; // Inline styles for the droppable container
  children: React.ReactNode;
}