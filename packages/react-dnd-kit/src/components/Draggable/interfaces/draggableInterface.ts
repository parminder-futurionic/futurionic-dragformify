
export interface UseDraggableOptions {
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onCustomDragStart?: () => void;
  onCustomDragEnd?: () => void;
  customDragData?: any; // Custom data to transfer during drag (optional)
  dragImage?: string; // URL of the custom drag image (optional)
  dragHandleSelectors?: string[]; // CSS selectors for the drag handle elements (optional)
  dragStartThreshold?: number; // Drag start threshold in pixels (optional)
  preventTouchScroll?: boolean; // Prevent touch scroll during dragging (optional)
  disableDraggingOnMobile?: boolean; // Disable dragging on touch devices (optional)
}

export interface DraggableProps extends UseDraggableOptions {
  defaultClassName?: string; // Default CSS class for the draggable item
  additionalClassName?: string; // Additional CSS classes for overriding or adding styles
  disableDragging?: boolean; // Disable dragging based on a condition
  as?: string | keyof JSX.IntrinsicElements ; // Custom element type (e.g., 'li', 'span', etc.)
  customDragData?: any; // Custom data to transfer during drag (optional)
  children: React.ReactNode;
}