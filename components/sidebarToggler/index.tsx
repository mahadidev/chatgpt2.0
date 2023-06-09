import { useStateContext } from "../../context";
import React from "react";
import { Icon } from "../../components";

const SidebarToggler = ({ type }: { type: "sidebar" | "float" }) => {
  // context
  const { setSidebar, isSidebar } = useStateContext();
  return (
    <button
      className={`flex p-3 gap-3 transition-colors duration-200 ${
        type === "sidebar"
          ? "border-white/20 text-white  hover:bg-gray-500/10"
          : "bg-white hover:bg-gray-100 border-black/10 text-black"
      }  cursor-pointer text-lg rounded-md border h-11 w-11 flex-shrink-0 items-center justify-center`}
      onClick={() => setSidebar((prev) => !prev)}
    >
      {isSidebar ? Icon.SVG.toggleRight : Icon.SVG.toggleLeft}
    </button>
  );
};

export default SidebarToggler;
