"use client";
import React, { useContext, useState } from "react";
interface ISidebarContext {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBarContext = React.createContext<ISidebarContext>({
  collapsed: false,
  setCollapsed: function (_value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
});

interface ISidebarProps {
  children: React.ReactNode;
}
const SidebarHook = ({ children }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <SideBarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SidebarHook;

export const useSidebar = () => useContext(SideBarContext);
