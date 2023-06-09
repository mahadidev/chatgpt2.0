"use client";
import React, { useState, createContext, useContext } from "react";

const State = () => {
  // state
  const [isSidebar, setSidebar] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [messagesHeight, setMessagesHeight] = useState<number>(0);
  const [gptVersion, setGptVersion] = useState<3.5 | 4>(3.5);

  // call default
  const contextDefaultCall = () => {};

  return {
    contextDefaultCall,
    isSidebar,
    setSidebar,
    theme,
    setTheme,
    messagesHeight,
    setMessagesHeight,
    gptVersion,
    setGptVersion,
  };
};

const Context = createContext({} as ReturnType<typeof State>);

export const ContextProvider = ({ children }: { children: any }) => {
  return <Context.Provider value={State()}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
