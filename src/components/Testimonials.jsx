import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function Testimonial() {
  const [people, setpeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = people.length-1;
    if(index<0){
      setIndex(lastIndex)
    }
    if(index> lastIndex){
      setIndex(0)
    }
  },[index,people])

  useEffect(()=>{
    let slider = setInterval(() => {
      setIndex(index+1)
    }, 3000);
    return ()=>clearInterval(slider)
  },[index])
  return (
    <section className="section bg-[#260C40]">
      <div className="title">
        <h2>
          <span>/</span>Testimonials
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let postion = "nextSlide";
          if (personIndex === index) {
            postion = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            postion = "lastSlide";
          }
          return (
            <article className={postion} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text text-[#89618A]">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={()=> setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=> setIndex(index+1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
