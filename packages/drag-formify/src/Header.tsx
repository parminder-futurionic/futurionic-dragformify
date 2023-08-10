// Header.js
import React from "react";
import { SettingIcon } from "./assets/SvgIcons/SettingIcon";
import { MenuIcon } from "./assets/SvgIcons/MenuIcon";
import { JsonIcon } from "./assets/SvgIcons/JsonIcon";
import { PreviewIcon } from "./assets/SvgIcons/PreviewIcon";
import { MainContentIcon } from "./assets/SvgIcons/MainContentIcon";

interface IHeader {
  toggleJsonView?: () => void;
  toogleFormPreview?: () => void;
  toggleMainContent?: () => void;
}

const Header: React.FC<IHeader> = ({
  toggleJsonView,
  toogleFormPreview,
  toggleMainContent,
}) => {
  return (
    <header className="bg-white text-blue-500 p-4 shadow-md flex justify-between items-center">
      <label
        htmlFor="formDragLeftSideBar"
        className="btn btn-primary btn-circle drawer-button lg:hidden"
      >
        <MenuIcon size="30px" fill="#fff" className="text-slate-50" />
      </label>
      <h1 className="text-xl font-bold">Header</h1>

      {/* Page content here */}
      <div className="join">
        <div className="tooltip tooltip-bottom z-30" data-tip="Drag-Drop">
          <button
            className="btn btn-square btn-sm btn-outline  join-item"
            onClick={toggleMainContent}
          >
            <MainContentIcon size="22" fill={"currentColor"} />
          </button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="JSON Viewer">
          <button
            className="btn btn-square btn-sm btn-outline  join-item"
            onClick={toggleJsonView}
          >
            <JsonIcon size="24" fill={"currentColor"} />
          </button>
        </div>
        <div className="tooltip tooltip-bottom z-30" data-tip="Preview Form">
          <button
            className="btn btn-square btn-sm btn-outline  join-item"
            onClick={toogleFormPreview}
          >
            <PreviewIcon size="22" fill={"currentColor"} />
          </button>
        </div>
      </div>

      <label
        htmlFor="formDragRightSideBar"
        className="drawer-button btn btn-primary btn-circle lg:hidden"
      >
        <SettingIcon size="36px" fill="#fff" className="text-slate-50" />
      </label>
    </header>
  );
};

export default Header;
