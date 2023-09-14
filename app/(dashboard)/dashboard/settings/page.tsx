"use client";
import React from "react";
import { useSession } from "next-auth/react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

const SettingsLayout = () => {
  const { data } = useSession();
  return (
    <section className="h-screen">
      <DashboardNavbar />
      <div>Settings</div>
    </section>
  );
};

export default SettingsLayout;
