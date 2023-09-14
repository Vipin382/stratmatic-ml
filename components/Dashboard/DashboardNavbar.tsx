"use client";
import { Input } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { Navbar, NavbarContent } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";

const DashboardNavbar = () => {
  const { data } = useSession();
  return (
    <Navbar className="border-b py-3 bg-[#1E1E1E] border-b-gray-400 border-opacity-5 shadow px-4">
      <NavbarContent>
        <NavbarContent className="bg-[#1E1E1E] justify-center flex flex-col">
          <div>
            <p className="text-white">{`Welcome ${
              data?.user?.name || "Friend"
            }`}</p>
            <p className="text-green-600">
              Hope you are healthy and happy today...
            </p>
          </div>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent className="bg-[#1E1E1E]">
        <Input
          type={"search"}
          className="border rounded bg-white p-1 text-xs"
          placeholder="Search..."
        />
        <IoMdNotifications
          className="cursor-pointer"
          size={"22"}
          color="white"
        />
        <div className="flex items-center gap-1 w-auto cursor-pointer">
          <Avatar
            className="cursor-pointer h-12 w-12 hidden lg:block"
            src={
              data?.user?.image
                ? data?.user?.image
                : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
            }
          />
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                className="cursor-pointer h-12 w-12 hidden lg:hidden"
                src={
                  data?.user?.image
                    ? data?.user?.image
                    : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                }
              />
            </DropdownTrigger>
            <DropdownMenu
              className="bg-[#1E1E1E] block md:hidden"
              aria-label="Static Actions"
              onAction={(props) => {
                props === "delete" ? signOut() : null;
              }}
            >
              <DropdownItem
                key="new"
                className="hover:bg-[#282727] hover:text-white text-[#515352] focus:bg-[#282727] focus:text-white"
                startContent={<MdSpaceDashboard />}
                description="open dashboard"
              >
                Dashboard
              </DropdownItem>
              <DropdownItem
                key="copy"
                className="hover:bg-[#282727] hover:text-white text-[#515352] focus:bg-[#282727] focus:text-white"
                startContent={<MdOutlineAnalytics />}
                description="Check analytics"
              >
                Analytics
              </DropdownItem>
              <DropdownItem
                key="edit"
                className="hover:bg-[#282727] hover:text-white text-[#515352] focus:bg-[#282727] focus:text-white"
                startContent={<BiUserPin />}
                description="Check your account"
              >
                My Portfolio
              </DropdownItem>
              <DropdownItem
                key="set"
                className="hover:bg-[#282727] hover:text-white text-[#515352] focus:bg-[#282727] focus:text-white"
                startContent={<IoSettingsOutline />}
                description="change User Settings"
              >
                Settings
              </DropdownItem>
              <DropdownItem
                key="help"
                className="hover:bg-[#282727] hover:text-white text-[#515352] focus:bg-[#282727] focus:text-white"
                startContent={<AiOutlineInfoCircle />}
                description="Ask for query"
              >
                Help
              </DropdownItem>
              <DropdownSection>
                <DropdownItem
                  key="delete"
                  color={"danger"}
                  variant="flat"
                  className="hover:bg-[#F31260] hover:bg-opacity-10 focus:bg-[#F31260] focus:bg-opacity-10"
                  startContent={<BiLogOut />}
                  description="Logout from Flesso"
                >
                  Log out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default DashboardNavbar;
