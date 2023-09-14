"use client";
import { Avatar } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const LoginCard = () => {
  return (
    <Card
      isPressable
      isHoverable
      className="rounded-lg p-2 flex flex-col gap-y-2 bg-[#2520e3] max-w-[400px]"
    >
      <CardBody>
        <p
          className={`text-white text-justify tracking-tight text-base opacity-95`}
        >
          Simply unbelievable! I am really satisfied with my projects and
          bussiness. This is Absolutely wonderful!
        </p>
      </CardBody>
      <CardFooter>
        <div className="flex justify-evenly gap-3 items-center">
          <Avatar
            radius="sm"
            name="Vipin"
            className="h-8 bg-orange-500 rounded-full text-xs w-8"
            color="danger"
          />
          <div className="flex flex-col">
            <p className="text-white text-base">Timson K</p>
            <p className="text-white text-[10px] opacity-60">Freelancer</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
