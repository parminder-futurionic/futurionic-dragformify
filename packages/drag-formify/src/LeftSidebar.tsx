import React from "react";

import { inputItem } from "./components/InputProperty";
import DraggableField from "./components/DraggableField";
import Accordion from "./components/Accodion";
import { CloseIcon } from "./assets/SvgIcons/CloseIcon";

interface ILeftSidebar {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<ILeftSidebar> = ({ isOpen, onClose }) => {
  const classes = isOpen ? "translate-y-0" : "translate-y-full";

  const close = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    document.getElementById("formDragLeftSideBar")!.click();
  };

  return (
    <div className="drawer-side z-20 ">
      <label htmlFor="formDragLeftSideBar" className="drawer-overlay"></label>
      <ul className="pt-2 w-80 bg-base-100 h-full text-base-content">
        <button
          className="btn btn-ghost   btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={(e) => close(e)}
        >
          <CloseIcon />
        </button>
        {/* Sidebar content here */}

        <li className="p-0 mt-20 lg:mt-0">
          <Accordion
            heading={"Input Component"}
            content={
              <div className="grid grid-cols-3 gap-0">
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
