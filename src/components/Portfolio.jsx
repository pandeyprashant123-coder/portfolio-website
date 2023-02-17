import React from 'react'
import Kosthetic from '../imgs/bgi.jpg'

const Portfolio = () => {
  return (
    <section className='bg-[#89618A] z-0'>
        <div className='bottom-gradient flex flex-col  px-28 pb-8 pt-6'>
            <h1 className='text-8xl font-medium text-white mb-11'>My Portfolio</h1>
            <h1 className='text-5xl font-medium text-white text-center mb-11'>My masterpiece collection</h1>
            <div className='grid grid-cols-4 gap-6 my-6'>
                <a href='https://pandeyprashant123-coder.github.io/kosthetik/' className='' target={'_blank'}> <img src={Kosthetic} className='rounded-2xl drop-shadow-md'  alt="" height='100%' width='100%'/></a>
                <a href='https://hackathon-indol.vercel.app/' className='' target={'_blank'}> <img src='https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg' className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='https://github.com/fairfield-programming'  target={'_blank'}> <img src='https://github.com/fairfield-programming/.github/raw/main/spread.png?raw=true' className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='https://pandeyprashant123-coder.github.io/ACES-PAGE.github.io/'  target={'_blank'}> <img src='https://github.com/pandeyprashant123-coder/ACES-PAGE.github.io/blob/main/Images/web%20design%20compition.jpg?raw=true' className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='https://social-site-ddb414.netlify.app/' target={'_blank'}> <img src={Kosthetic} className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='' target={'_blank'}> <img src="" className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='' target={'_blank'}> <img src={Kosthetic} className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='' target={'_blank'}> <img src={Kosthetic} className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='' target={'_blank'}> <img src={Kosthetic} className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
                <a href='' target={'_blank'}> <img src={Kosthetic} className='rounded-2xl drop-shadow-md' alt="" height='100%' width='100%'/></a>
            </div>
        </div>
    </section>
  )
}

export default Portfolio