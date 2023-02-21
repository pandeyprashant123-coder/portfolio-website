import React from "react";
import Kosthetic from "../imgs/bgi.jpg";

const Card = ({img,link,clink,name,description}) => {
  return(
  <>
    <img
      src={img}
      alt=""
      className="rounded-2xl drop-shadow-md"
    />
    <div className="cardcontent flex -translate-y-32 text-white rounded-2xl">
      <div className="pb-3 pl-1">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="">{description}</p>
        <a href={clink}><button>Viewcode</button></a>
        <a href={link} rel="noreferrer" target={"_blank"}><button>visit site</button></a>
      </div>
    </div>
  </>
)};

// "https://social-site-ddb414.netlify.app/"
const Portfolio = () => {
  return (
    <section className="bg-[#89618A] z-0">
      <div className="bottom-gradient flex flex-col  px-28 pb-8 pt-6">
        <h1 className="text-8xl font-medium text-white mb-11">My Portfolio</h1>
        <h1 className="text-5xl font-medium text-white text-center mb-11">
          My masterpiece collection
        </h1>
        <div className="grid grid-cols-7 gap-3 my-6">
          <div className="col-span-3 row-span-2">
            <Card
              img={'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=600'}
              link={'https://social-site-ddb414.netlify.app/'}
              name={'social-Site'}
              clink={'https://social-site-ddb414.netlify.app/'}
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae."}
            />
          </div>
          <div className="col-span-2">
            <Card
              img={Kosthetic}
              link={'https://pandeyprashant123-coder.github.io/kosthetik/'}
              name={'Kosthetik'}
              clink={'https://pandeyprashant123-coder.github.io/kosthetik/'}
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae."}
            />
          </div>
          <div className="col-span-2">
            <Card
              img={'https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg'}
              link={'https://hackathon-indol.vercel.app/'}
              name={'Hackathon'}
              clink={'https://hackathon-indol.vercel.app/'}
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae."}
            />
          </div>
          <div className="col-span-4">
            <Card
              img={'https://github.com/fairfield-programming/.github/raw/main/spread.png?raw=true'}
              link={'https://github.com/fairfield-programming'}
              name={'Opensource'}
              clink={'https://github.com/fairfield-programming'}
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quae."}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
