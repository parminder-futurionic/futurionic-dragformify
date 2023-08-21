import React from "react";

import DraggableField from "./components/DraggableField";
import Accordion from "./components/Accodion";
import { CloseIcon } from "./assets/SvgIcons/CloseIcon";
import { draggableListItem } from "./constant";

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

        {draggableListItem.map((listItem) => (
          <li className="p-0  lg:mt-0" key={listItem.id}>
            <Accordion
              heading={listItem.accordionHeading}
              content={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                  {listItem.content.map((item: any) => (
                    <DraggableField
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      icon={item.icon}
                      component={listItem.component}
                      name={item.name}
                      property={item.property}
                    />
                  ))}
                </div>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
