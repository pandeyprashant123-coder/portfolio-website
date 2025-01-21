"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Kosthetic from "../public/imgs/bgi.jpg";
import projects from "./projects.json";

const Card = ({ img, link, clink, name, description }) => {
  return (
    <div className="flex p-10 flex-col lg:flex-row  rounded-2xl justify-between my-3 bg-[#260c4072]">
      {img ? (
        <Image
          src={img}
          alt=""
          className="drop-shadow-md h-40 lg:h-96 object-cover lg:w-1/2 m-2 rounded-md"
          width={1000}
          height={0}
        />
      ) : (
        <h1 className="flex text-white text-5xl font-bold text-center justify-center items-center">
          {name}
        </h1>
      )}
      <div className=" flex text-white lg:w-1/2 p-5 items-center justify-start">
        <div className=" px-3">
          {img && <h3 className="text-xl font-bold">{name}</h3>}
          <p className="lg:pb-5">{description}</p>
          <Link href={link}>
            <button className="bg-white text-black rounded p-1 mb-1 mr-2">
              See demo
            </button>
          </Link>
          <Link href={clink} rel="noreferrer" target={"_blank"}>
            <button>View code</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="bg-[#89618A] z-0">
      <div className="bottom-gradient flex flex-col  py-11  px-8 lg:px-28 lg:pb-8 pb-20">
        <h1 className="text-5xl lg:text-8xl font-medium text-white mb-11">
          My Portfolio
        </h1>
        <h1 className="text-3xl lg:text-6xl font-medium text-white mb-11">
          My masterpiece collection
        </h1>
        {/* <div className="grid lg:grid-cols-7 gap-7 lg:gap-6 lg:my-6">
          <div className="lg:col-span-3 lg:row-span-2">
            <Card
              img={''}
              link={'https://social-site-ddb414.netlify.app/'}
              name={'social-Site'}
              clink={'https://github.com/pandeyprashant123-coder/socialSite-frontend'}
              description={"It's a full stack social media app. It is made with MERN stack where we can post the status making the account. We can like the posts of one another and make friends."}
            />
          </div>
          <div className="lg:col-span-2">
            <Card
              img={Kosthetic}
              link={''}
              name={'Kosthetik'}
              clink={'https://github.com/pandeyprashant123-coder/kosthetik'}
              description={"It is a multipage ecommerce blog site for cosmetics made to display beauty products. Only Html and CSS is used to delelop it."}
            />
          </div>
          <div className="lg:col-span-2">
            <Card
              img={''}
              link={'https://pandeyprashant123-coder.github.io/kosthetik/'}
              name={'Hackathon'}
              clink={'https://github.com/pandeyprashant123-coder/krishi_bazar/'}
              description={"It is our hackathon project site for the farmers to by and sell the goods solving problem related to agricultural field in Nepal"}
            />
          </div>
          <div className="lg:col-span-4">
            <Card
              img={''}
              link={'https://github.com/fairfield-programming'}
              name={'Opensource'}
              clink={'https://github.com/fairfield-programming'}
              description={"We're on a mission to teach everyone in the world to program. Our efforts include corporate partnerships, school and university charters, digital resources, and support for the open-source ecosystem."}
            />
          </div>
          
        </div> */}
        {projects.map((project) => (
          <Card
            img={project.img}
            link={project.link}
            name={project.name}
            clink={project.clink}
            description={project.description}
          />
        ))}

        {/* <Card
          link={
            "https://www.linkedin.com/posts/prashnta-pandey-2b91211a3_healthcareinnovation-medtech-empowerment-activity-7170297548606222336-GrOc?utm_source=share&utm_medium=member_desktop"
          }
          clink={"https://github.com/Sujan14728/MediscanPlus"}
          name={"MediscanPlus"}
          img={
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          description={
            "Our team has developed a cutting-edge application that leverages advanced technologies such as Optical Character Recognition (OCR) and Natural Language Processing (NLP) to provide users with quick access to information about medicines through image scanning."
          }
        />
        <Card
          img={"/imgs/banner3.png"}
          link={"https://hackathon-indol.vercel.app/"}
          name={"Hackathon"}
          clink={"https://github.com/pandeyprashant123-coder/krishi_bazar/"}
          description={
            "It is our hackathon project site for the farmers to by and sell the goods solving problem related to agricultural field in Nepal"
          }
        />

        <Card
          img={Kosthetic}
          link={""}
          name={"Kosthetik"}
          clink={"https://github.com/pandeyprashant123-coder/kosthetik"}
          description={
            "It is a multipage ecommerce blog site for cosmetics made to display beauty products. Only Html and CSS is used to delelop it."
          }
        />
        <Card
          link={"https://social-site-ddb414.netlify.app/"}
          name={"social Networking Site"}
          clink={
            "https://github.com/pandeyprashant123-coder/socialSite-frontend"
          }
          description={
            "It's a full stack social media app. It is made with MERN stack where we can post the status making the account. We can like the posts of one another and make friends."
          }
        /> */}
      </div>
    </section>
  );
};

export default Portfolio;
