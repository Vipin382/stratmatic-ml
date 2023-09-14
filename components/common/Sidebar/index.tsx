"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import LogoIcon from "../../Dashboard/icons/LogoIcon";
import React from "react";
import { useSidebar } from "@/hooks/sidebarHook";

const SidebarComp = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebar();

  const HandleSidebar = () => setCollapsed(!collapsed);
  return (
    <Sidebar
      backgroundColor="#1E1E1E"
      className="lg:block hidden"
      rootStyles={{
        border: "none",
      }}
      collapsed={collapsed}
    >
      <div className="h-[77.2px] border-b border-b-gray-400 border-opacity-5 ">
        {!collapsed ? (
          <>
            <Menu
              menuItemStyles={{
                button: {
                  ":hover": {
                    background: "transparent",
                  },
                },
              }}
              className="h-full flex items-center"
            >
              <MenuItem icon={<LogoIcon collapsed={HandleSidebar} />}>
                <h1
                  className="font-bold text-blue-600 text-lg sm:text-xl md:text-3xl"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  FLESSO
                </h1>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Menu
            menuItemStyles={{
              button: {
                ":hover": {
                  background: "transparent",
                },
              },
            }}
            className="h-full flex items-center"
          >
            <MenuItem icon={<LogoIcon collapsed={HandleSidebar} />}></MenuItem>
          </Menu>
        )}
      </div>
      <div className="flex flex-col gap-y-4">
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                background: "transparent",
              },
            },
          }}
        >
          <MenuItem
            icon={<MdSpaceDashboard />}
            className="text-gray-400"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<MdOutlineAnalytics />}
            className="text-gray-400"
            onClick={() => router.push("/dashboard/analytics")}
          >
            Analytics
          </MenuItem>
          <MenuItem
            icon={<BiUserPin />}
            className="text-gray-400"
            onClick={() => router.push("/dashboard/portfolio")}
          >
            My Portfolio
          </MenuItem>
        </Menu>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                background: "transparent",
              },
            },
          }}
        >
          <MenuItem
            icon={<IoSettingsOutline />}
            className="text-gray-400"
            onClick={() => router.push("/dashboard/settings")}
          >
            Settings
          </MenuItem>
          <MenuItem
            icon={<AiOutlineInfoCircle />}
            className="text-gray-400"
            onClick={() => router.push("/dashboard/help")}
          >
            Help
          </MenuItem>
          <MenuItem
            className="text-red-400"
            icon={<BiLogOut />}
            onClick={() =>
              signOut({
                callbackUrl: "/SiginPage",
              })
            }
          >
            Log out
          </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SidebarComp;
