"use client"
import React from "react";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section className="bg-[#260C40]">
      <div className="back-gradient flex flex-col py-11  px-8 lg:px-28 pb-8">
        <h1 className="text-5xl lg:text-8xl font-medium text-white mb-11">
          My Resume
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col gap-4 lg:gap-0 w-24  lg:w-96 text-white text-xl lg:text-4xl text-right font-semibold border-r-2 border-[#C099E4] pr-4">
            <h1>
              10
              <br /> Projects
            </h1>
            <br />
            <br />
            <h1>
              3<br />
              Awards
            </h1>
            <br />
            <br />
            <h1>
              Many
              <br />
              happy clients
            </h1>
          </div>
          <div className="flex flex-col gap-10 text-white text-xs lg:text-xl pl-3 lg:pl-8 lg:pr-10 w-3/4">
            <p>
            My portfolio showcases some of the web development projects I have completed. Each project has challenged me in different ways and has helped me to grow as a developer. I am always looking for new opportunities to learn and improve my skills.
            </p>
            
            <div className="">
              <h1 className="text-2xl font-bold">SKILLS</h1>
              <div className="flex flex-row gap-5 py-5">
                <div className="text-xl font-semibold flex flex-col gap-5">
                  <Skills skill={"React"} dots={7} colorL={"bg-blue-400"} />
                  <Skills skill={"NodeJS"} dots={6} colorL={"bg-green-700"} />
                  <Skills skill={"MongoDB"} dots={5} colorL={"bg-green-400"} />
                  <Skills skill={"C++"} dots={8} colorL={"bg-blue-400"} />
                  <Skills skill={"Python"} dots={6} colorL={"bg-yellow-300"} />
                  <Skills skill={"CSS"} dots={9} colorL={"bg-blue-400"} />
                  <Skills skill={"DSA"} dots={5} colorL={"bg-red-500"} />
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
                  <p className="text-[#89618A]">2021</p>
                  <h1 className="text-xl">Kosthetik</h1>
                  <p className="text-[#89618A]">Web Developer</p>
                  <p className="text-[#89618A]">
                    As a freelancer web designer and project handeler.
                  </p>
                </div>
              </div>
            </div>
            <p>
            If you are looking for a web developer who is passionate about their craft, dedicated to delivering results, and eager to learn, I would be happy to discuss a potential project with you. Please feel free to contact me if you have any questions or would like to learn more about my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
