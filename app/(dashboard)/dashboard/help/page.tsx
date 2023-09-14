"use client";
import React from "react";
import { useSession } from "next-auth/react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

const HelpLayout = () => {
  const { data } = useSession();
  return (
    <section className="h-screen">
      <DashboardNavbar />
      <div>Help</div>
    </section>
  );
};

export default HelpLayout;
