"use client";
import React from "react";
import Skills from "./Skills";

import { FaReact, FaNodeJs } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

const Resume = () => {
  return (
    <section className="bg-[#260C40]">
      <div className="back-gradient flex flex-col py-11  px-8 lg:px-28 pb-8">
        <h1 className="text-5xl lg:text-8xl font-medium text-white mb-11">
          My Resume
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col gap-10 text-white text-xs lg:text-xl ">
            <p>
              My portfolio showcases some of the web development projects I have
              completed. Each project has challenged me in different ways and
              has helped me to grow as a developer. I am always looking for new
              opportunities to learn and improve my skills.
            </p>

            <div className="">
              <h1 className="text-2xl font-bold">SKILLS</h1>
              <div className="flex flex-row gap-5 py-5">
                <div className="text-xl font-semibold flex flex-wrap gap-10">
                  <div>
                    <FaNodeJs className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>Node.js</p>
                  </div>
                  <div>
                    <FaReact className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>React</p>
                  </div>
                  <div>
                    <TbBrandNextjs className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>NextJs</p>
                  </div>
                  <div>
                    <SiPython className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>Python</p>
                  </div>
                  <div>
                    <FaHtml5 className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>HTML</p>
                  </div>
                  <div>
                    <FaCss3Alt className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>CSS</p>
                  </div>
                  <div>
                    <SiMongodb className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>MongoDB</p>
                  </div>
                  <div>
                    <FaNode className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>NodeJs</p>
                  </div>
                  <div>
                    <FaGitAlt className="text-5xl hover:text-green-300 cursor-pointer" />
                    <p>Git</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">Education</h1>
                <div>
                  <p className="text-[#89618A]">2019 - 2021</p>
                  <h1 className="text-xl">+2 Science</h1>
                  <p className="text-[#89618A]">Advance Academy S.S</p>
                </div>
                <div>
                  <p className="text-[#89618A]">2022 - present</p>
                  <h1 className="text-xl">Bachlor in Computer Engineering</h1>
                  <p className="text-[#89618A]">
                    IOE,Purwanchal Campus Dharan-8
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold">Experience</h1>
                <div>
                  <p className="text-[#89618A]">2023</p>
                  <h1 className="text-xl">Grab A Teek</h1>
                  <p className="text-[#89618A]">Full-Stack Developer</p>
                  <p className="text-[#89618A]">A trek booking site.</p>
                </div>
                <div>
                  <p className="text-[#89618A]">2021</p>
                  <h1 className="text-xl">Kosthetik</h1>
                  <p className="text-[#89618A]">Web Developer</p>
                  <p className="text-[#89618A]">
                    As a freelancer web designer and project handeler.
                  </p>
                </div>
              </div>
            </div>
            <p className="">
              {
                "If you are looking for a web developer who is passionate about their craft, dedicated to delivering results, and eager to learn,I would be happy to discuss a potential project with you. Please feel free to contact me if you have any questions or would like to learn more about my work."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
