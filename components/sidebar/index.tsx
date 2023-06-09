"use client";
import { useStateContext } from "../../context";
import React from "react";
import { SidebarToggler } from "../../components";

const Sidebar = () => {
  // context
  const { isSidebar, setSidebar } = useStateContext();
  return (
    <aside
      className={`fixed top-0 left-0 md:relative  z-30 w-full ${
        isSidebar ? "max-w-[300px]" : "max-w-[0px]"
      } h-screen bg-gray-900 flex-shrink-0 overflow-x-hidden`}
    >
      <div className="flex gap-2 justify-end p-3">
        <SidebarToggler type="sidebar" />
      </div>
    </aside>
  );
};

export default Sidebar;
