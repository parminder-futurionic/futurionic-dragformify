// MainContent.js
import React from "react";
import DropZone from "./components/Dropzone";

const MainContent = () => {
  return (
    <main className="bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-4">Main Content</h1>
      {/* Add your content here */}
      <DropZone />
    </main>
  );
};

export default MainContent;
