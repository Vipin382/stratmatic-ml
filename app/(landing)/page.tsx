"use client";
import React from "react";
import { Link, Button, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();
  return (
    <main
      className={`bg-[#1E1E1E] transition-all ease-linear text-white px-3 sm:px-8 lg:px-16`}
    >
      <div className="h-[75vh] sm:h-[90vw] md:h-[600px] flex border-b-slate-500 border-b relative">
        <div className="absolute z-0 w-full h-full grid grid-cols-3 grid-rows-3">
          <div className="bg-[#a930fe] bg-opacity-5 blur-[72px] col-span-2 col-start-2 col-end-3 row-start-1 row-end-4 rounded-full"></div>
          <div className="bg-[#fc743a] bg-opacity-5 blur-[72px] col-span-2 col-start-1 row-start-3 row-end-4 col-end-2 rounded-full"></div>
          <div className="bg-[#fc743a] bg-opacity-5 blur-[72px] col-span-1 col-start-3 col-end-4 row-start-3 row-end-4 rounded-full"></div>
        </div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="max-w-[600px] flex flex-col gap-6">
            <p className="text-purple-300 font-bold text-2xl sm:text-3xl md:text-5xl leading-tight tracking-tight text-center transition-all ease-linear [word-spacing:5px]">
              Welcome to the World of Bussiness with
              <Link className="text-transparent underline outline-none text-yellow-600 transition-all sm:text-3xl md:text-5xl ease-linear bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-700">
                {" "}
                Machine Learning
              </Link>
            </p>
            <p
              className="text-center transition-all ease-linear text-xs md:text-sm"
              color="text"
            >
              Organize meetings with the help of ML and make it successfull
            </p>
            <Button
              variant={"shadow"}
              className="bg-gradient-to-r min-w-[100px] md:min-w-[300px] h-6 sm:h-12 sm:max-w-none rounded text-xs md::text-xl from-blue-600 to-violet-500 self-center"
              onClick={() => router.push("/dashboard")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <section
        className={`bg-[#1E1E1E] flex gap-y-10 flex-col items-center py-4 text-white`}
      >
        <div className="text-center mb-6 md:mb-2">
          <p
            className="font-semibold text-sm sm:text-base md:text-lg tracking-widest [word-spacing:2px]"
            color="text"
          >
            Trusted by nearly 5000+ paying customers
          </p>
        </div>
        <Image className="w-full" src={"./assets/logos.svg"} alt={"loading"} />
      </section>
    </main>
  );
};

export default Landing;
