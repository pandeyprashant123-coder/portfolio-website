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
        <div className="flex flex-row justify-around gap-10">
          <div className="flex flex-col gap-10 text-xs md:text-xl text-white md:text-justify">
            <p>
              My name is prashnta Pandey, from kathmandu,Nepal. I am current
              studying in IOE, Purwanchal campus, Dharan. I am a passionate
              software Developer who wants to learn a new thing everyday.
            </p>
            <p>
              I'm a driven and adaptable professional with a diverse background
              in computer engineering and a passion for leveraging technology to
              drive positive change. With expertise spanning front-end and
              back-end development, data science, and machine learning, I bring
              a unique blend of technical skills and creative thinking to every
              project.
            </p>
            <p>
              My journey in the realm of technology began with a Bachelor's in
              Computer Engineering from Tribhuvan University, IOE, Purwanchal
              Campus, where I'm currently pursuing my degree with an expected
              completion in 2025. Along the way, I've had the honor of receiving
              accolades such as winning hackathons and securing top positions
              for projects that merge innovation with social impact. From
              building mobile apps for medicine detection to creating e-commerce
              platforms for farmers and designing AI-integrated websites for the
              visually impaired, I thrive on challenging the status quo and
              pushing the boundaries of what's possible. My commitment to
              excellence and results-driven approach has earned me recognition
              as a top performer in my field.
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
