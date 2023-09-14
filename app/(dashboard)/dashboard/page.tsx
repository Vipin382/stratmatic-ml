"use client";
import React, { useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import ChartComponents from "@/components/Dashboard/ChartComponents";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import DataCard from "@/components/Dashboard/DataCard";
import { newmodalcontext } from "@/utils/ModalContextWrapper";

const DashboardLanding = () => {
  const { data } = useSession();
  const { setVisible, visible } = useContext(newmodalcontext);
  return (
    <section className="min-h-screen w-[98%] flex flex-col ">
      <DashboardNavbar />
      <div className="flex flex-col max-w-full px-4">
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 p-2">
          <DataCard
            heading={"Total Meetings"}
            subHeading={"From Begining"}
            total={"100"}
          />
          <DataCard
            heading={"Successfull Meetings"}
            subHeading={"Total Success"}
            total={"15"}
          />
          <DataCard
            heading={"Total Visits"}
            subHeading={"From Starts"}
            total={"120"}
          />
          <DataCard heading={"Total Users"} subHeading={""} total={"1.1K"} />
        </div>
        <div className="rounded flex items-center justify-between px-2 text-white p-4 h-[50px] mx-2">
          <p className="text-white">Schedule a Meeting</p>
          <Tooltip
            content={
              <div className="text-xs text-white bg-black/20 ">
                Schedule meeting
              </div>
            }
            color={"primary"}
          >
            <motion.i
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              className="text-3xl cursor-pointer"
              onClick={() => {
                setVisible(true);
                console.log("hero");
              }}
            >
              <AiOutlineAppstoreAdd />
            </motion.i>
          </Tooltip>
        </div>
        <div className="h-[200px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex justify-center">
          <ChartComponents />
        </div>
      </div>
    </section>
  );
};

export default DashboardLanding;
