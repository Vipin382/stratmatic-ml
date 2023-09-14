"use client";
import React, { useState } from "react";
import { createContext } from "react";

interface IModalContext {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const newmodalcontext = createContext<IModalContext>({
  visible: false,
  setVisible: function (_value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
});

interface IWrapper {
  children: React.ReactNode;
}

const ModalContextWrapper: React.FC<IWrapper> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <newmodalcontext.Provider value={{ visible, setVisible }}>
      {children}
    </newmodalcontext.Provider>
  );
};

export default ModalContextWrapper;
