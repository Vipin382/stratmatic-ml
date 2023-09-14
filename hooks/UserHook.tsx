"use client";
import React, { useContext } from "react";

interface ILIST {
  data: string[][] | null;
  setData: React.Dispatch<React.SetStateAction<string[][] | null>>;
}

const dataContext = React.createContext<ILIST>({
  data: [],
  setData: function (_value: React.SetStateAction<string[][] | null>): void {
    throw new Error("Function not implemented.");
  },
});

interface IUserHook {
  children: React.ReactNode;
}

const UserHook = ({ children }: IUserHook) => {
  const [data, setData] = React.useState<string[][] | null>(null);
  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export default UserHook;

export const useMldata = () => React.useContext(dataContext);
