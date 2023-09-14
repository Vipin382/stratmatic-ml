"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

interface IDataCard {
  heading: string;
  total: string;
  subHeading: string;
}
const DataCard: React.FC<IDataCard> = ({ heading, total, subHeading }) => {
  return (
    <Card className="rounded border h-[150px] group flex flex-col justify-center gap-2 p-2 hover:border-neutral-600 transition-colors duration-100 hover:bg-neutral-700 bg-neutral-800 border-neutral-700 filter-none cursor-pointer">
      <CardHeader>
        <p className="text-xs font-medium text-white/40 tracking-wide">
          {heading}
        </p>
      </CardHeader>
      <CardBody className="overflow-hidden text-center">
        <p className="text-5xl text-white font-bold"> {total}</p>
        <p className="font-medium text-xs text-neutral-500">{subHeading}</p>
      </CardBody>
    </Card>
  );
};

export default DataCard;
