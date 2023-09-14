"use client";
import { Image, Link } from "@nextui-org/react";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
interface LinkInterface {
  title: string;
  href: string;
}

const LinksData: LinkInterface[] = [
  { title: "Demos", href: "/demos" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Pages", href: "/pages" },
  { title: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <aside className="bg-[#1E1E1E] transition-all ease-linear flex justify-between px-3 sm:px-8 lg:px-16 py-2 ">
      <div className="flex gap-12 items-center">
        <div className="flex gap-2 md:gap-4 items-center cursor-pointer">
          <Image src={"./assets/logo.svg"} width={20} alt="loading..." />
          <h1 className="font-bold text-white text-xl" onClick={() => {}}>
            FLESSO
          </h1>
        </div>
        <div className="gap-4 md:gap-6 text-xs hidden md:flex transition-all ease-linear">
          {LinksData.map((item, index) => {
            return (
              <Link key={index} href={item.href} className="text-white">
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex gap-2 md:gap-4">
        <Button
          variant={"flat"}
          className=" bg-blue-500 bg-opacity-30 self-center hover:shadow rounded py-1.5 px-5 text-[10px] cursor-pointer text-white"
          onClick={() => router.push("/signin")}
        >
          Login
        </Button>
        <Button
          className="bg-gradient-to-r  from-blue-600 to-violet-500 self-center rounded py-1.5 px-5 cursor-pointer text-white text-[10px]"
          onClick={() => router.push("/register")}
        >
          Signup
        </Button>
      </div>
    </aside>
  );
};

export default Navbar;
