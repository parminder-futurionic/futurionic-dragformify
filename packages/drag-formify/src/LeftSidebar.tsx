import React from "react";

import { inputItem } from "./components/InputProperty";
import DraggableField from "./components/DraggableField";
import Accordion from "./components/Accodion";

interface ILeftSidebar {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<ILeftSidebar> = ({ isOpen, onClose }) => {
  const classes = isOpen ? "translate-y-0" : "translate-y-full";

  return (
    <aside className="w-full md:w-1/5 backdrop-blur-lg bg-indigo-100 text-white p-4 md:block hidden">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-indigo-800">Left Sidebar</h1>
        {/* Add your content here */}
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white rounded p-2 md:hidden"
        >
          Close Sidebar
        </button>
      </div>
      <Accordion
        heading={"Input Component"}
        content={
          <>
            {inputItem.map((item: any) => (
              <DraggableField
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                name={item.name}
                property={item.property}
              />
            ))}
          </>
        }
      />
    </aside>
  );
};

export default LeftSidebar;
