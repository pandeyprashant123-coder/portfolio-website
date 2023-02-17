import React from "react";
import facebook from "../imgs/facebook.svg";
import twitter from "../imgs/twitter.svg";
import linkedin from "../imgs/linkedin.svg";

const About = () => {
  return (
    <section className="bg-[#89618A]">
      <div className="bottom-gradient flex flex-col  px-28 pb-8">
        <h1 className="text-8xl font-medium text-white mb-11">About Me</h1>
        <div className="flex flex-row justify-around">
          <div className="w-96 text-white text-3xl font-semibold text-right border-r-2 border-[#C099E4] pr-4">
          <h1></h1><br/><br/><br/>
                    <h1>Coding</h1><br/>
                    <h1>Listening<br/>Music</h1><br/>
                    <h1>Cooking</h1>
            <h1></h1>
            
          </div>
          <div className="flex flex-col gap-10 text-white pl-8 pr-10 w-3/4 text-justify">
            <p>
              My name is prashnta Pandey, from kathmandu,Nepal. I am current
              studying in IOE, Purwanchal campus, Dharan. I am a passionate
              software Developer who wants to learn a new thing everyday.
            </p>
            <p>
              My name is prashnta pandey.The standard chunk of Lorem Ipsum used
              since the 1500s is reproduced below for those interested.
            </p>
            <p>
              My name is prashnta pandey.The standard chunk of Lorem Ipsum used
              since the 1500s is reproduced below for those interested.
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
