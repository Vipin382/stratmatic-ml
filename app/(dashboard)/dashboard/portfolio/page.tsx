"use client";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import { useMldata } from "@/hooks/UserHook";
import React from "react";

const PortfolioLayout = () => {
  const { data } = useMldata();
  return (
    <section className="h-screen overflow-y-auto">
      <DashboardNavbar />
      <h1 className="text-white tracking-widest p-4 text-4xl">
        Top Rated Locations
      </h1>
      {data ? (
        data.map((item: any[], index: React.Key | null | undefined) => {
          return (
            <div key={index} className="text-white rounded-xl border p-4 m-4">
              {item.map((item2, index2) => {
                return <div key={index2}>{item2}</div>;
              })}
            </div>
          );
        })
      ) : (
        <div className="text-white w-full h-full flex justify-center items-center text-xl">
          No meeting is scheduled yet
        </div>
      )}
    </section>
  );
};

export default PortfolioLayout;
