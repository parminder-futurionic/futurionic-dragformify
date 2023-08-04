import React from "react";
import LeftSidebar from "./LeftSidebar";

interface IFloatingButtons {
    isLeftSidebar: boolean;
  toggleLeftSidebar: () => void;
  setIsLeftSidebarOpen: (v: any) => void;
}

const FloatingButtons: React.FC<IFloatingButtons> = ({
    isLeftSidebar,
  toggleLeftSidebar,
  setIsLeftSidebarOpen,
}) => {
  const [touchStartX, setTouchStartX] = React.useState(0);
  const [touchEndX, setTouchEndX] = React.useState(0);


  return (
    <div className="fixed bottom-4 left-4 flex md:hidden">
      <button
        onClick={toggleLeftSidebar}
      
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21a1 1 0 01-1 1H6a1 1 0 01-1-1v-1a7 7 0 017-7h0a7 7 0 017 7v1zM7 10V9a5 5 0 1110 0v1"
          />
        </svg>
      </button>
      {/* Left Sidebar (Desktop) */}
      <aside className="bg-green-500 text-white p-4 hidden md:block w-64">
        <LeftSidebar isOpen={isLeftSidebar} onClose={toggleLeftSidebar} />
      </aside>
    </div>
  );
};

export default FloatingButtons;
