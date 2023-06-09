"use client";
import { useStateContext } from "../../context";
import React from "react";

const Layout = ({ children }: { children: any }) => {
  // context
  const { theme } = useStateContext();

  return <div className={`overflow-x-hidden flex ${theme}`}>{children}</div>;
};

export default Layout;
