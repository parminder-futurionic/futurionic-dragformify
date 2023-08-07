// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <label
        htmlFor="formDragLeftSideBar"
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </label>
      <h1 className="text-xl font-bold">Header</h1>
    </header>
  );
};

export default Header;
