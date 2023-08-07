// // src/App.tsx
// import React from 'react';
// import DraggableField from './components/DraggableField';
// import DropZone from './components/Dropzone';
// import { DraggableInputProvider } from './components/DraggableInputContext';

// const App: React.FC = () => {

//   return (
//     <DraggableInputProvider>
//       <div className="p-4 flex">
//         <div className="flex-grow">
//           <DraggableField name="firstName" label="First Name" />
//           <DraggableField name="lastName" label="Last Name" />
//           <DraggableField name="middleName" label="Middle Name" />
//           {/* Add more draggable fields as needed */}
//         </div>
//         <div className="flex-grow-0 w-64">
//           <DropZone />
//         </div>
//       </div>
//     </DraggableInputProvider>
//   );
// };

// export default App;

import React, { useState } from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import { DraggableInputProvider } from "./components/DraggableInputContext";

const App = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen((prevState) => !prevState);
  };

  return (
    <DraggableInputProvider>
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="drawer lg:drawer-open h-screen">
          <input
            id="formDragLeftSideBar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-cols flex-col">
            {/* Page content here */}
            
            <Header />
            
              {/* Main Content */}
              <main className="bg-gray-100 p-4 flex-grow min-h-screen">
                <MainContent />
              </main>
            
          </div>
          <LeftSidebar isOpen={isLeftSidebarOpen} onClose={toggleLeftSidebar} />
        </div>

        {/* Right Sidebar */}

        <RightSidebar
          isOpen={isRightSidebarOpen}
          onClose={toggleRightSidebar}
        />
      </div>
    </DraggableInputProvider>
  );
};

export default App;
