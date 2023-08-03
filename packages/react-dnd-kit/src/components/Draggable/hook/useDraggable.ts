import { useState, useEffect, useRef } from "react";
import { UseDraggableOptions } from "../interfaces";

const useDraggable = (options: UseDraggableOptions = {}) => {
  const {
    onDragStart,
    onDragEnd,
    onCustomDragStart,
    onCustomDragEnd,
    customDragData,
    dragImage,
    dragHandleSelectors,
    dragStartThreshold = 5,
    preventTouchScroll = true,
    disableDraggingOnMobile = false,
  } = options;
  const draggableRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedElementPosition, setDraggedElementPosition] = useState({
    x: 0,
    y: 0,
  });
  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const handleDragStart = (e: DragEvent) => {
      if (isPreventDrag(e.target as HTMLElement)) {
        e.preventDefault();
        return;
      }
      const dataTransfer = e.dataTransfer;
      if (dataTransfer)
        e.dataTransfer.setData("text", JSON.stringify(customDragData));

      if (dragImage && dataTransfer) {
        const dragImg = new Image();
        dragImg.src = dragImage;
        e.dataTransfer.setDragImage(dragImg, 0, 0);
      }

      setIsDragging(true);
      if (onDragStart) {
        onDragStart();
      }
      if (onCustomDragStart) {
        onCustomDragStart();
      }
      setDraggedElementPosition({ x: e.clientX, y: e.clientY });
      // Prevent default dragstart behavior after setting the data
      e.preventDefault();
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      if (onDragEnd) {
        onDragEnd();
      }
      if (onCustomDragEnd) {
        onCustomDragEnd();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isTouchDevice && disableDraggingOnMobile) {
        return;
      }

      if (preventTouchScroll) {
        e.preventDefault();
      }

      setIsDragging(true);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const isPreventDrag = (target: HTMLElement): boolean => {
      if (dragHandleSelectors && dragHandleSelectors.length > 0) {
        return !dragHandleSelectors.some(
          (selector) => target.closest(selector) === draggableRef.current
        );
      }
      return false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!isTouchDevice) {
        const startX = e.clientX;
        const startY = e.clientY;

        const handleMouseMove = (event: MouseEvent) => {
          const deltaX = Math.abs(event.clientX - startX);
          const deltaY = Math.abs(event.clientY - startY);

          if (deltaX > dragStartThreshold || deltaY > dragStartThreshold) {
            window.removeEventListener("mousemove", handleMouseMove);
            handleDragStart(e as any);
          }
        };

        window.addEventListener("mousemove", handleMouseMove);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleDragStart(e as any);
      }
    };

    const currentElement = draggableRef.current;

    if (currentElement) {
      currentElement.addEventListener("dragstart", handleDragStart);
      currentElement.addEventListener("dragend", handleDragEnd);
      currentElement.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      currentElement.addEventListener("touchend", handleTouchEnd);
      currentElement.addEventListener("mousedown", handleMouseDown);
      currentElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("dragstart", handleDragStart);
        currentElement.removeEventListener("dragend", handleDragEnd);
        currentElement.removeEventListener("touchstart", handleTouchStart);
        currentElement.removeEventListener("touchend", handleTouchEnd);
        currentElement.removeEventListener("mousedown", handleMouseDown);
        currentElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [
    customDragData,
    dragImage,
    dragHandleSelectors,
    dragStartThreshold,
    preventTouchScroll,
    disableDraggingOnMobile,
  ]);

  return {
    isDragging,
    draggableRef,
    draggedElementPosition,
    setDraggedElementPosition,
  };
};

export default useDraggable;
