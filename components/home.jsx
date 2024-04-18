"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Poster from "../public/imgs/hacker.svg";
import hamburger from "../public/imgs/hamburger.svg";
import Nav from "./Nav";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Home = () => {
  const [nav, setnav] = useState(false);
  return (
    <section className="back-split  h-[32rem] md:h-screen lg:h-screen text-center">
      <div className="back-gradient h-[32rem] h- md:h-screen lg:h-screen px-8 md:px-12 lg:px-28 flex flex-col md:gap-0 lg:gap-0 justify-evenly  lg:grid">
        <div className="fixed right-8 top-6 md:right-15 md:top-8 lg:right-20 lg:top-14 z-20">
          <button className="btnH " onClick={() => setnav(true)}>
            <Image src={hamburger} alt="" width={25} height={0} />
          </button>
        </div>
        <Nav nav={nav} setnav={setnav} />
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 lg:gap-0">
          <div className="text-center md:text-center lg:text-left lg:w-96 col-span-2 md:col-span-2 lg:col-span-1">
            <h1 className="lg:text-5xl md:text-5xl font-bold text-white text-3xl">
              Prashnta Pandey
            </h1>
            <h2 className="lg:text-xl md:text-xl text-[#89618A] z-10 text-xl mt-2">
              {
                "Undergrad CS Engineering Student · Full Stack · ML & Data Enthusiast · Tech"
              }
            </h2>

            <div className="flex gap-6 mt-4 z-10 relative text-white">
              <Link href="www.linkedin.com/in/prashnta-pandey-2b91211a3">
                <FiLinkedin className="text-2xl" />
              </Link>
              <Link href="https://github.com/pandeyprashant123-coder">
                <FaGithub className="text-2xl" />
              </Link>
              <Link href="https://twitter.com/PrashntaPandey">
                <FaXTwitter className="text-2xl" />
              </Link>
              <Link href="">
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </div>
          <Image
            src={Poster}
            alt="poster"
            className=" scale-125 relative"
            height={200}
            width={200}
          />
          <div className="text-white text-left text-sm md:text-xl">
            <p>
              {
                "I'm an full-stack developer and aspiring ML/AI enthusiast creating my own version of the digital world one step at a time. IOE,ERC."
              }
            </p>
          </div>
        </div>
        <div className="grid md:gap-10 gap-11 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl lg:text-2xl text-[#C099E4]">
              Born In
            </h3>
            <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white">
              Kathmandu
            </h4>
          </div>
          <div className="text-right md:text-center lg:text-center">
            <h3 className="text-xl md:text-2xl lg:text-2xl text-[#C099E4]">
              Experience
            </h3>
            <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white">
              3 Years
            </h4>
          </div>
          <div className="text-center md:text-right col-span-2 md:col-span-1 lg:col-span-1 lg:text-right">
            <h3 className="text-xl md:text-2xl lg:text-2xl text-[#C099E4]">
              Date
            </h3>
            <h4 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white">
              29th September, 2000
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
