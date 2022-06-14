import React from "react";
import Link from "next/link";
import Image from "next/image";
import headerimage from "../public/vr-3559840_1920.jpg";

export default function HeroSection() {
  return (
    <>
      {/* Container div */}
      <div className="flex flex-row items-center">
        <Image src={headerimage} alt=""></Image>

        {/* Flexible item */}
        <div className="absolute w-full h-auto ml-12">
          <h3 className="text-lg font-bold text-white pb-8">
            On-Demand Courses and Live Coaching
          </h3>
          <h1 className="text-4xl font-bold text-white pb-6">
            Become a professional AR/VR Developer
          </h1>
          <h3 className="text-lg font-bold text-white pb-4">
            We teach you the fundamental programming and design skills, so you
            become job-ready
          </h3>
          <Link href="/">
            <button className="bg-orange-500 shadow-black rounded-full text-lg px-4 py-2 font-bold text-white hover:text-black">
              GET ACCESS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
