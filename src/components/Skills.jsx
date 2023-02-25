import React from "react";

const Skills = ({dots,colorL,skill}) => {
    const arr1=['bg-white','bg-white','bg-white','bg-white','bg-white','bg-white','bg-white','bg-white','bg-white','bg-white',]
    for (let i = 0; i < dots; i++) {
        arr1[i]=colorL
    }
  return (
    <div className='flex text-sm lg:text-xl flex-row gap-3 lg:gap-9 justify-between items-center'>
      <h1>{skill}</h1>
      <div className="flex flex-row gap-2 lg:gap-6">
        {arr1?.map((color) => (
          <div className={`h-2 w-2 lg:h-3 lg:w-3 rounded-full ${color}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
