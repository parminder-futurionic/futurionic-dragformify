import { useState, useEffect } from "react";

interface ContainerBounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

/**
 * Helper function to snap a value to the nearest grid point based on snapSize
 */
export const snapToGrid = (value: number, snapSize: number): number => {
  return Math.round(value / snapSize) * snapSize;
};

/**
 * Helper function to calculate the new position for dragging based on the current position and offset
 */
export const calculateNewPosition = (
  x: number,
  y: number,
  offset: { x: number; y: number }
): { x: number; y: number } => {
  const newX = x - offset.x;
  const newY = y - offset.y;
  return { x: newX, y: newY };
};

/**
 * Helper function to check if the element is within the container bounds
 */
export const isWithinContainerBounds = (
  x: number,
  y: number,
  containerBounds: ContainerBounds | null,
  size: { width: number; height: number }
): boolean => {
  if (!containerBounds) return true;

  const containerLeft = containerBounds.left;
  const containerTop = containerBounds.top;
  const containerRight = containerBounds.right - size.width;
  const containerBottom = containerBounds.bottom - size.height;

  return (
    x >= containerLeft &&
    x <= containerRight &&
    y >= containerTop &&
    y <= containerBottom
  );
};

/**
 * Hook to get container bounds by ID
 */
export const useContainerBounds = (
  containerId?: string
): ContainerBounds | null => {
  const [containerBounds, setContainerBounds] =
    useState<ContainerBounds | null>(null);

  useEffect(() => {
    if (containerId) {
      const container = document.getElementById(containerId);
      if (container) {
        const bounds = container.getBoundingClientRect();
        setContainerBounds({
          left: bounds.left,
          top: bounds.top,
          right: bounds.right,
          bottom: bounds.bottom,
          width: bounds.width,
          height: bounds.height,
        });
      }
    }
  }, [containerId]);

  return containerBounds;
};

/**
 * Helper function to calculate the new size for resizing based on the current size and aspect ratio
 */
export const calculateNewSize = (
  width: number,
  height: number,
  aspectRatio?: number
): { width: number; height: number } => {
  const newWidth = snapToGrid(width, 10);
  const newHeight = snapToGrid(
    aspectRatio ? newWidth / aspectRatio : height,
    10
  );
  return { width: newWidth, height: newHeight };
};

/**
 * Helper function to update the element size during resizing
 */
export const updateElementSize = (
  width: number,
  height: number,
  aspectRatio: number | undefined,
  maxSize: { width: number; height: number },
  containerBounds: ContainerBounds | null,
  position: { x: number; y: number }
): { width: number; height: number } => {
  // ... (Previous size update logic)
  const newSize = calculateNewSize(width, height, aspectRatio);

  // Additional logic to prevent element overlap within the container
  if (containerBounds) {
    const maxX = containerBounds.width - position.x;
    const maxY = containerBounds.height - position.y;

    if (newSize.width > maxX) {
      newSize.width = maxX;
      if (aspectRatio) {
        newSize.height = newSize.width / aspectRatio;
      }
    }

    if (newSize.height > maxY) {
      newSize.height = maxY;
      if (aspectRatio) {
        newSize.width = newSize.height * aspectRatio;
      }
    }
  }

  // Snap to grid if enabled
  if (snapToGrid) {
    newSize.width = snapToGrid(newSize.width, 10);
    newSize.height = snapToGrid(newSize.height, 10);
  }

  return {
    width: Math.min(Math.max(10, newSize.width), maxSize.width),
    height: Math.min(Math.max(10, newSize.height), maxSize.height),
  };
};
