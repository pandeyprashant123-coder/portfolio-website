"use client";
import Link from "next/link";
import React from "react";
const navAnimation = {
  transform: "translateX(0rem)",
};
const navAnimationback = {
  transform: "translateX(40rem)",
};
const Nav = ({ nav, setnav }) => {
  return (
    <div
      className="animationClick fixed gap-y-44 right-0 top-6 lg:top-12 flex flex-col bg-[#62326A]/[0.8] h-full w-2/3 md:w-1/3 lg:w-1/4 z-20"
      style={nav ? navAnimation : navAnimationback}
    >
      <div className="text-left p-1">
        <button onClick={() => setnav(false)}>&#10060;</button>
      </div>
      <div className="flex flex-col  gap-11 text-white text-2xl font-bold">
        <Link href="/">Home</Link>
        <Link href="">About</Link>
        <Link href="https://medium.com/@prashntapandey">Blog</Link>
        <Link href="">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
