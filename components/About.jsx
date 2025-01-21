"use client";
import React from "react";
import Image from "next/image";

import facebook from "../public/imgs/facebook.svg";
import twitter from "../public/imgs/twitter.svg";
import linkedin from "../public/imgs/linkedin.svg";

const About = () => {
  return (
    <section className="bg-[#89618A]">
      <div className="bottom-gradient flex flex-col px-8 md:px-28 pb-8 py-8">
        <h1 className="text-6xl md:text-8xl font-medium text-white mb-11">
          About Me
        </h1>
        <div className="flex flex-col-reverse lg:flex-row justify-around gap-10">
          <div className="flex flex-col gap-10 text-xs md:text-xl text-white md:text-justify">
            <p>
              {
                "My name is Prashnta Pandey, and I am from Kathmandu, Nepal. I am currently studying at IOE, Purwanchal Campus, Dharan, pursuing a degree in Computer Engineering with expected completion in 2025."
              }
            </p>
            <p>
              {
                "As a passionate software developer, I am dedicated to learning something new every day. I have a diverse background in front-end and back-end development, data science, and machine learning. My journey includes winning hackathons and securing top positions for innovative projects, such as medicine detection apps, e-commerce platforms for farmers, and AI-integrated websites for the visually impaired. I am committed to excellence and using technology to drive positive change."
              }
            </p>
            <div className="text-xl">
              Follow Me..
              <div className="flex flex-row gap-3 py-5">
                <a
                  href="https://www.facebook.com/profile.php?id=100007166771427"
                  target="_blank"
                >
                  <Image src={facebook} alt="" height={0} width={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prashnta-pandey-2b91211a3/"
                  target="_blank"
                >
                  <Image src={twitter} alt="" height={0} width={30} />
                </a>
                <a href="https://twitter.com/PrashntaPandey" target="_blank">
                  <Image src={linkedin} alt="" height={0} width={30} />
                </a>
              </div>
            </div>
          </div>
          <Image
            src="/imgs/Prashnta.png"
            alt=""
            height={300}
            width={300}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
