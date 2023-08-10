import React from "react";

import { inputItem } from "./components/InputProperty";
import DraggableField from "./components/DraggableField";
import Accordion from "./components/Accodion";
import { CloseIcon } from "./assets/SvgIcons/CloseIcon";

interface ILeftSidebar {
  isOpen?: boolean;
  onClose?: () => void;
}

const LeftSidebar: React.FC<ILeftSidebar> = ({}) => {
  const close = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    document.getElementById("formDragLeftSideBar")!.click();
  };

  return (
    <div className="drawer-side z-20 w-3/5  md:w-2/4 lg:w-full drop-shadow-xl lg:drop-shadow-none ">
      <label htmlFor="formDragLeftSideBar" className="drawer-overlay"></label>
      <ul className="pt-2  w-full bg-base-100 h-full text-base-content">
        <div className="p-3 border-b border-gray-300 flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold">Components</h2>
          <button
            className="btn btn-ghost   btn-circle z-50 lg:hidden"
            onClick={(e) => close(e)}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Sidebar content here */}

        <li className="p-0  lg:mt-0">
          <Accordion
            heading={"Input Component"}
            content={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
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
              </div>
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
