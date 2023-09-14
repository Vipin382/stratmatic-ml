"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen bg-[#1E1E1E] text-white flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        Page is Under Construction
        <div className="flex gap-4">
          <Button
            className=" rounded leading-4 py-1.5 px-2 border border-neutral-600 text-neutral-600 antialiased font-medium text-xs cursor-pointer bg-gradient-to-r"
            onClick={() => {
              router.push("/");
            }}
          >
            Go Back To Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
