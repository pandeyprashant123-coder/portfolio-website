import React, { useState } from 'react'

import Poster from '../imgs/hacker.svg'
import hamburger from '../imgs/hamburger.svg'
import Nav from './Nav'


const Home = () => {
    const [nav, setnav] = useState(false)
  return (
    <section className='back-split  h-[32rem] md:h-screen lg:h-screen text-center'>
      <div className='back-gradient h-[32rem] h- md:h-screen lg:h-screen px-8 md:px-12 lg:px-28 flex flex-col md:gap-0 lg:gap-0 justify-evenly  lg:grid'>
        <div className='fixed right-8 top-6 md:right-15 md:top-8 lg:right-20 lg:top-14 z-20'>
          <button className='btnH ' onClick={()=>setnav(true)}><img src={hamburger} alt="" /></button>
        </div>
        <Nav nav={nav} setnav={setnav}/>
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 lg:gap-0">
          <div className='text-center md:text-center lg:text-left lg:w-96 col-span-2 md:col-span-2 lg:col-span-1'>
            <h2 className='lg:text-3xl md:text-3xl text-[#89618A] z-10 text-2xl'>Web Developer</h2>
            <h1 className='lg:text-5xl md:text-5xl font-bold text-white text-3xl'>Prashnta Pandey</h1>
          </div>
          <img src={Poster} alt="poster" className=' scale-125 relative' />
          <div className='text-white text-left text-sm md:text-xl'>
            <p>
            Hi, there I am a web developer loves to design websites . I love coding and experiment with it..
            </p>
          </div>
          </div> 
          <div className="grid md:gap-10 gap-11 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6">
            <div className='text-left'>
              <h3 className='text-xl md:text-2xl lg:text-2xl text-[#C099E4]'>Born In</h3>
              <h4 className='text-2xl md:text-3xl lg:text-3xl font-bold text-white'>Kathmandu</h4>
            </div>
            <div className='text-right md:text-center lg:text-center'>
              <h3 className='text-xl md:text-2xl lg:text-2xl text-[#C099E4]'>Experience</h3>
              <h4 className='text-2xl md:text-3xl lg:text-3xl font-bold text-white'>2 Years</h4>
            </div>
            <div className='text-center md:text-right col-span-2 md:col-span-1 lg:col-span-1 lg:text-right'>
              <h3 className='text-xl md:text-2xl lg:text-2xl text-[#C099E4]'>Date</h3>
              <h4 className='text-2xl md:text-3xl lg:text-3xl font-bold text-white'>29th September, 2000</h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home