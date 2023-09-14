import SidebarComp from "@/components/common/Sidebar";
import ScheduleMeeting from "@/components/common/modals/ScheduleMeeting";
import SidebarHook from "@/hooks/sidebarHook";
import AuthenticatedProtectionWrapper from "@/utils/AuthenticatedProtectionWrapper";
import ModalContextWrapper from "@/utils/ModalContextWrapper";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthenticatedProtectionWrapper>
        <ModalContextWrapper>
          <ScheduleMeeting />
          <SidebarHook>
            <div className="flex">
              <SidebarComp />
              <main className="w-full bg-[#1E1E1E] border border-l border-gray-600 border-opacity-10">
                {children}
              </main>
            </div>
          </SidebarHook>
        </ModalContextWrapper>
      </AuthenticatedProtectionWrapper>
    </>
  );
}
