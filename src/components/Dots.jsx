import React from "react";

const Dots = ({num,colorL}) => {
    const arr1=['white','white','white','white','white','white','white','white','white','white',]
    for (let i = 0; i < num; i++) {
        arr1[i]=colorL
    }
  return (
    <div>
      <div className="flex flex-row gap-6">
        {arr1?.map((color) => (
          <div className={`h-3 w-3 rounded-full bg-${color}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Dots;
