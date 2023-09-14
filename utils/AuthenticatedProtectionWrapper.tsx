"use client";
import { useSession } from "next-auth/react";
import { Button } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

interface IReactChildren {
  children: React.ReactNode;
}

const AuthenticatedProtectionWrapper: React.FC<IReactChildren> = ({
  children,
}) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="w-screen h-full bg-[#1E1E1E] text-white flex justify-center items-center">
        <Button size={"lg"} color={"default"} isLoading>
          Loading
        </Button>
      </div>
    );
  }
  if (status === "authenticated") {
    return <div>{children}</div>;
  }
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#1E1E1E] text-white flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        You Are Not Allowed To access This Resource
        <div className="flex gap-4">
          <Button
            className="from-blue-600 py-1.5 px-2 text-xs rounded to-violet-500 bg-gradient-to-r"
            onClick={() => {
              router.push("/");
            }}
          >
            Go Back To Home Page
          </Button>
          <Button
            className="from-blue-600 py-1.5 px-2 text-xs rounded to-violet-500 bg-gradient-to-r"
            onClick={() => {
              router.push("/RegisterPage");
            }}
          >
            Register Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedProtectionWrapper;
