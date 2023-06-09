import { useStateContext } from "../../context";
import React from "react";
import { Icon } from "../../components";

const ThemeToggler = () => {
  // context
  const { theme, setTheme } = useStateContext();
  return (
    <button
      className={`flex p-3 gap-3 transition-colors duration-200 bg-white hover:bg-gray-100 dark:bg-white/20 dark:hover:bg-white/30  border-black/10 dark:border-white/20 text-black dark:text-white cursor-pointer text-lg rounded-md border h-11 w-11 flex-shrink-0 items-center justify-center`}
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      {Icon.SVG.sun}
    </button>
  );
};

export default ThemeToggler;
