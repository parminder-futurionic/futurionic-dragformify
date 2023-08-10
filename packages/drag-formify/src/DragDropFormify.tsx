import React, { useState } from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";
import { useDraggableInputContext } from "./components/DraggableInputContext";
import JSONViewer from "./components/JSONViewer";
import FormPreview from "./components/FormPreview/FormPreview";

const DragDropFormify = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [openJsonView, setOpenJsonView] = useState(false);
  const [openFormPreview, setOpenFormPreview] = useState(false);
  const { updatedInputArray } = useDraggableInputContext();

  const toogleJsonView = () => {
    setOpenJsonView(!openJsonView);
    setOpenFormPreview(false);
  };

  const toogleFormPreview = () => {
    setOpenFormPreview(!openFormPreview);
    setOpenJsonView(false);
  };

  const toggleMainContent = () => {
    setOpenFormPreview(false);
    setOpenJsonView(false);
  };

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left Sidebar */}
      <div className="flex flex-col w-0 lg:w-1/5 lg:drawer-open">
        <input
          id="formDragLeftSideBar"
          type="checkbox"
          className="drawer-toggle"
        />

        <LeftSidebar isOpen={isLeftSidebarOpen} onClose={toggleLeftSidebar} />
      </div>
      <div className="flex flex-col w-full lg:w-3/5 ">
        <Header
          toggleJsonView={toogleJsonView}
          toogleFormPreview={toogleFormPreview}
          toggleMainContent={toggleMainContent}
        />

        {/* Main Content */}
        <main className="bg-gray-100 p-4 flex-grow min-h-screen">
          {!openJsonView && !openFormPreview && <MainContent />}
          {openJsonView && (
            <div className="p-8">
              <JSONViewer data={updatedInputArray} />
            </div>
          )}
          {openFormPreview && <FormPreview />}
        </main>
      </div>
      {/* Right Sidebar */}
      <div className="flex flex-col w-0 lg:w-1/5 lg:drawer-open drawer-end">
        <input
          id="formDragRightSideBar"
          type="checkbox"
          className="drawer-toggle"
        />

        <RightSidebar
          isOpen={isRightSidebarOpen}
          onClose={toggleRightSidebar}
        />
      </div>
    </div>
  );
};

export default DragDropFormify;
