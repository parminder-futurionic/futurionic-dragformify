// DragComponent.tsx
import React, { useRef, useState } from "react";
import { createContext, useContext,  } from "react";
interface DragComponentProps {
  items: string[];
}

const DragComponent: React.FC<DragComponentProps> = ({ items }) => {
  const { setDraggedItem } = useSharedState();
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, item: string) => {
    setDraggedItem(item);
    event.dataTransfer?.setData("text/plain", item);
  };

  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <div
          key={item}
          className="w-20 h-20 bg-blue-500 text-white text-center p-2 rounded-lg shadow-lg cursor-move"
          draggable={true}
          onDragStart={(event) => handleDragStart(event, item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

interface DroppedItem {
  id: number;
  item: string;
}

const DropComponent: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([]);
  const [showMarker, setShowMarker] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dropIndex, setDropIndex] = useState<number | null>(null);
  const { draggedItem: draggedItemFromContext, setDraggedItem: setDraggedItemToContext } =
    useSharedState();

  // Update the local draggedItem state when the context value changes
  React.useEffect(() => {
    setDraggedItem(draggedItemFromContext);
  }, [draggedItemFromContext]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowMarker(true);
  
    const dropZone = event.currentTarget;
    const { top, height } = dropZone.getBoundingClientRect();
    const cursorY = event.clientY - top;
    const elementHeight = height / droppedItems.length;
  
    // Calculate the index to drop the item
    let newDropIndex = Math.floor(cursorY / elementHeight);
    newDropIndex = Math.max(0, Math.min(droppedItems.length, newDropIndex));
  console.log(newDropIndex)
    setDropIndex(newDropIndex);
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowMarker(false);
  
    if (draggedItem !== null) {
      const newItem: DroppedItem = {
        id: Date.now(),
        item: draggedItem,
      };
  
      if (dropIndex !== null) {
        // Dropping between items
        const adjustedDropIndex = dropIndex < droppedItems.length ? dropIndex : droppedItems.length;
        const updatedItems = [...droppedItems];
        updatedItems.splice(adjustedDropIndex, 0, newItem);
        setDroppedItems(updatedItems);
      } else {
        // Dropping at the end of the list
        setDroppedItems((prevItems) => [...prevItems, newItem]);
      }
  
      setDraggedItem(null);
      setDropIndex(null);
    }
  };
  const handleDragLeave = () => {
    setShowMarker(false);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, item: string, id: number) => {
    setDraggedItem(item);
    setDraggedItemToContext(item);
    event.dataTransfer?.setData("text/plain", "");
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedItemToContext(null);
  };

  const handleClearDroppedElements = () => {
    setDroppedItems([]);
  };

  return (
    <div
      className="w-96 h-96 bg-gray-200 relative flex flex-col items-center justify-center border border-gray-400 rounded-lg"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      {droppedItems.map((droppedItem, index) => (
        <div
          key={droppedItem.id}
          className="w-20 h-20 bg-blue-500 text-white text-center p-2 rounded-lg m-2 cursor-move"
          draggable={true}
          onDragStart={(event) => handleDragStart(event, droppedItem.item, droppedItem.id)}
          onDragEnd={handleDragEnd}
        >
          {droppedItem.item}
        </div>
      ))}
      {showMarker && dropIndex !== null && (
        <div
          className="w-20 h-20 bg-green-500 text-white text-center p-2 rounded-lg absolute"
          style={{ top: dropIndex * 64 - 12, left: 8 }}
        >
          Drop Position
        </div>
      )}
      {droppedItems.length > 0 && (
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={handleClearDroppedElements}
        >
          Clear Dropped Elements
        </button>
      )}
    </div>
  );
};

interface SharedState {
  draggedItem: string | null;
  setDraggedItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const initialState: SharedState = {
  draggedItem: null,
  setDraggedItem: () => {},
};

const SharedStateContext = createContext<SharedState>(initialState);

export const useSharedState = () => {
  return useContext(SharedStateContext);
};

const SharedStateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  return (
    <SharedStateContext.Provider value={{ draggedItem, setDraggedItem }}>
      {children}
    </SharedStateContext.Provider>
  );
};



const App: React.FC = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <SharedStateProvider>
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <DropComponent />
      <DragComponent items={items} />
    </div>
  </SharedStateProvider>
  );
};

export default App;
