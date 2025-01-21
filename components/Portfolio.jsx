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
          width={500}
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
          {link && (
            <Link href={link}>
              <button className="bg-white text-black rounded p-1 mb-1 mr-2">
                See demo
              </button>
            </Link>
          )}
          {clink && (
            <Link href={clink} rel="noreferrer" target={"_blank"}>
              <button>View code</button>
            </Link>
          )}
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

        {projects.map((project, index) => (
          <div key={index}>
            <Card
              img={project.img}
              link={project.link}
              name={project.name}
              clink={project.clink}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
