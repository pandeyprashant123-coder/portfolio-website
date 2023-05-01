import React from "react";
import facebook from "../imgs/facebook.svg";
import twitter from "../imgs/twitter.svg";
import linkedin from "../imgs/linkedin.svg";

const About = () => {
  return (
    <section className="bg-[#89618A]">
      <div className="bottom-gradient flex flex-col px-8 md:px-28 pb-8 py-8">
        <h1 className="text-6xl md:text-8xl font-medium text-white mb-11">About Me</h1>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col gap-4 md:gap-0 w-24 md:w-96 text-white text-xl md:text-4xl font-semibold text-right border-r-2 border-[#C099E4] pr-4">
          <h1></h1><br/><br/><br/>
                    <h1>Coding</h1><br/><br/><br/>
                    <h1>Listening<br/>Music</h1><br/><br/><br/>
                    <h1>Cooking</h1>
            <h1></h1>
            
          </div>
          <div className="flex flex-col gap-10 text-xs md:text-xl text-white pl-3 md:pl-8 md:pr-10 w-3/4 md:text-justify">
            <p>
              My name is prashnta Pandey, from kathmandu,Nepal. I am current
              studying in IOE, Purwanchal campus, Dharan. I am a passionate
              software Developer who wants to learn a new thing everyday.
            </p>
            <p>
            As a web developer, I am passionate about creating engaging and user-friendly websites that meet the needs of my clients. I have honed my skills through various projects and have received recognition for my work, including several awards in hackathons during my time in college.
            Throughout my academic career, I have worked on various web development projects, allowing me to gain extensive experience in programming languages such as HTML, CSS, and JavaScript. These projects have given me the opportunity to develop my problem-solving and analytical skills, which are essential for developing effective and efficient websites.
            </p>
            <p>Although I have yet to have any professional experience, I am eager to put my skills to work and am confident that I can provide clients with high-quality web development services. I am excited about the prospect of collaborating with others to develop innovative and dynamic websites that meet their unique needs.
            </p>
            <div className="text-xl">
              Follow Me..
              <div className="flex flex-row gap-3 py-5">
                <a
                  href="https://www.facebook.com/profile.php?id=100007166771427"
                  target="_blank"
                >
                  <img src={facebook} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prashnta-pandey-2b91211a3/"
                  target="_blank"
                >
                  <img src={twitter} alt="" />
                </a>
                <a href="https://twitter.com/PrashntaPandey" target="_blank">
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
