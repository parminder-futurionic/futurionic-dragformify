import React, { useState, useEffect, useCallback } from "react";
import { UseDroppableOptions } from "../interfaces";

const useDroppable = (options: UseDroppableOptions = {}) => {
  const {
    onDrop,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragEnd,
    acceptItemTypes,
    disableDropping,
  } = options;
  const droppableRef = React.useRef<HTMLDivElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isInvalidDrop, setIsInvalidDrop] = useState(false);
 const [draggedElementPosition, setDraggedElementPosition] = useState({
    x: 0,
    y: 0,
  });
  const handleDrop = useCallback(
    (e:any,data: any, targetContainerId: string) => {
      console.log("handle");
      if (disableDropping) {
        setIsInvalidDrop(true);
      } else if (onDrop && acceptItemTypes && acceptItemTypes.includes(data) && droppableRef.current) {
        const droppableRect = droppableRef.current.getBoundingClientRect();
        const dropX = e.clientX - droppableRect.left;
        const dropY = e.clientY - droppableRect.top;

        onDrop(data, targetContainerId , {x: dropX, y: dropY});
      } else {
        // Additional check for invalid drops
        setIsInvalidDrop(true);
      }
    },
    [onDrop, acceptItemTypes, disableDropping]
  );

  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      setIsDragOver(true);
      if (onDragOver) {
        onDragOver();
      }
       setDraggedElementPosition({ x: e.clientX, y: e.clientY });
    };

    const handleDragEnter = () => {
      if (onDragEnter) {
        onDragEnter();
      }
    };

    const handleDragLeave = () => {
      setIsDragOver(false);
      setIsInvalidDrop(false);
      if (onDragLeave) {
        onDragLeave();
      }
    };

    const handleDragEnd = () => {
      setIsDragOver(false);
      setIsInvalidDrop(false);
      if (onDragEnd) {
        onDragEnd();
      }
    };

    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("dragenter", handleDragEnter);
    document.addEventListener("dragleave", handleDragLeave);
    document.addEventListener("dragend", handleDragEnd);

    return () => {
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("dragenter", handleDragEnter);
      document.removeEventListener("dragleave", handleDragLeave);
      document.removeEventListener("dragend", handleDragEnd);
    };
  }, [onDragOver, onDragEnter, onDragLeave, onDragEnd]);

  return {
    isDragOver,
    setIsDragOver,
    isInvalidDrop,
    handleDrop,
    setIsInvalidDrop,
    setDraggedElementPosition,
    draggedElementPosition,
    droppableRef
  };
};

export default useDroppable;
