import Navbar from "@/components/common/Navbar";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
