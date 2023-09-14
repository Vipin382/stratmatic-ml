"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
const PowerBiDashboard = dynamic(
  () => import("@/components/powerbi-dashboard"),
  {
    loading: () => <p>loading...</p>,
  }
);
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

const AnalyticsLayout = () => {
  const { data } = useSession();
  return (
    <section className="min-h-screen">
      <DashboardNavbar />
      <div className="relative h-[95vh] w-[98%] ">
        <PowerBiDashboard />
      </div>
    </section>
  );
};

export default AnalyticsLayout;
