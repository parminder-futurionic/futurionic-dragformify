import React from "react";
import PropertyFields from "./components/PropertyFields";

interface IRightSidebar {
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<IRightSidebar> = ({ isOpen, onClose }) => {
  return (
    <aside className="transition-all duration-500 ease-in-out w-full md:w-1/5 bg-blue-50 text-blue-500 p-4 md:block hidden">
      <h1 className="text-xl font-bold mb-4">Settings</h1>
      <button
        onClick={onClose}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded md:hidden block"
      >
        Close Drawer
      </button>
      <PropertyFields />
    </aside>
  );
};

export default RightSidebar;
