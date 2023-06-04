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
    <div className="cardcontent flex -translate-y-40 text-white rounded-2xl">
      <div className=" px-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="lg:pb-5">{description}</p>
        <a href={link}><button className="bg-white text-black rounded p-1 mb-1 mr-2">Visit site</button></a>
        <a href={clink} rel="noreferrer" target={"_blank"}><button>View code</button></a>
      </div>
    </div>
  </>
)};

// "https://social-site-ddb414.netlify.app/"
const Portfolio = () => {
  return (
    <section className="bg-[#89618A] z-0">
      <div className="bottom-gradient flex flex-col  py-11  px-8 lg:px-28 lg:pb-8 pb-20">
        <h1 className="text-5xl lg:text-8xl font-medium text-white mb-11">My Portfolio</h1>
        <h1 className="text-3xl lg:text-6xl font-medium text-white mb-11">
          My masterpiece collection
        </h1>
        <div className="grid lg:grid-cols-7 gap-7 lg:gap-6 lg:my-6">
          <div className="lg:col-span-3 lg:row-span-2">
            <Card
              img={'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=600'}
              link={'https://social-site-ddb414.netlify.app/'}
              name={'social-Site'}
              clink={'https://github.com/pandeyprashant123-coder/socialSite-frontend'}
              description={"It's a full stack social media app. It is made with MERN stack where we can post the status making the account. We can like the posts of one another and make friends."}
            />
          </div>
          <div className="lg:col-span-2">
            <Card
              img={Kosthetic}
              link={'https://pandeyprashant123-coder.github.io/kosthetik/'}
              name={'Kosthetik'}
              clink={'https://github.com/pandeyprashant123-coder/kosthetik'}
              description={"It is a multipage ecommerce blog site for cosmetics made to display beauty products. Only Html and CSS is used to delelop it."}
            />
          </div>
          <div className="lg:col-span-2">
            <Card
              img={'https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg'}
              link={'https://hackathon-indol.vercel.app/'}
              name={'Hackathon'}
              clink={'https://github.com/pandeyprashant123-coder/krishi_bazar/'}
              description={"It is our hackathon project site for the farmers to by and sell the goods solving problem related to agricultural field in Nepal"}
            />
          </div>
          <div className="lg:col-span-4">
            <Card
              img={'https://github.com/fairfield-programming/.github/raw/main/spread.png?raw=true'}
              link={'https://github.com/fairfield-programming'}
              name={'Opensource'}
              clink={'https://github.com/fairfield-programming'}
              description={"We're on a mission to teach everyone in the world to program. Our efforts include corporate partnerships, school and university charters, digital resources, and support for the open-source ecosystem."}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
