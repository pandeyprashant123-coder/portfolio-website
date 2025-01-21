"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Kosthetic from "../public/imgs/bgi.jpg";
import projects from "./projects.json";

const Card = ({ img, link, clink, name, description }) => {
  return (
    <>
      {img ? (
        <Image
          src={img}
          alt=""
          className="drop-shadow-md h-40 lg:h-80 object-cover lg:w-1/2 "
          width={500}
          height={0}
        />
      ) : (
        <h1 className="flex text-white text-5xl font-bold text-center justify-center items-center">
          {name}
        </h1>
      )}
      <div className=" flex text-white lg:w-1/2  items-center justify-start p-5 lg:p-10">
        <div className=" px-3">
          {img && <h3 className="text-xl font-bold">{name}</h3>}
          <p className="lg:pb-5">{description}</p>
          <div className="flex gap-2 my-3 items-center">
            {link && (
              <Link href={link}>
                <button className="bg-white text-black font-semibold rounded py-1 px-3  mr-2 duration-150 hover:bg-gray-100">
                  See demo
                </button>
              </Link>
            )}
            {clink && (
              <Link href={clink} rel="noreferrer" target={"_blank"}>
                <button className="hover:bg-gray-200 py-1 px-3 rounded hover:text-black duration-150">
                  View code
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
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
        <div className="flex flex-wrap gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex w-full  flex-col gap-2 lg:flex-row  rounded justify-between  bg-[#260c4072] overflow-hidden"
            >
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
      </div>
    </section>
  );
};

export default Portfolio;
