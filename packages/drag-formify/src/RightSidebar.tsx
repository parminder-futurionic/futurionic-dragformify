import React from "react";
import PropertyFields from "./components/PropertyFields";
import { CloseIcon } from "./assets/SvgIcons/CloseIcon";

interface IRightSidebar {
  isOpen?: boolean;
  onClose?: () => void;
}

const RightSidebar: React.FC<IRightSidebar> = ({}) => {
  const close = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    document.getElementById("formDragRightSideBar")!.click();
  };

  return (
    <div className="drawer-side z-20 drop-shadow-xl lg:drop-shadow-none">
      <label htmlFor="formDragRightSideBar" className="drawer-overlay"></label>
      <ul className="pt-2 bg-base-100 w-3/5 lg:w-full h-full text-base-content">
        <div className="p-3 border-b border-gray-300 flex flex-row justify-between items-center">
          <h2 className="text-lg font-semibold">Settings</h2>
          <button
            className="btn btn-ghost   btn-circle z-50 lg:hidden"
            onClick={(e) => close(e)}
          >
            <CloseIcon />
          </button>
        </div>

        <PropertyFields />
      </ul>
    </div>
  );
};

export default RightSidebar;
