"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { NextUIProvider } from "@nextui-org/system";
import { SessionProvider } from "next-auth/react";
import UserHook from "@/hooks/UserHook";

export const metadata: Metadata = {
  title: "Flesso",
  description: "AI MONTIORED MEETINGS",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <UserHook>
            <NextUIProvider>{children}</NextUIProvider>
          </UserHook>
        </SessionProvider>
      </body>
    </html>
  );
}
