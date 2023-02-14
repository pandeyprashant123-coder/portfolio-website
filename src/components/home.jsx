import React, { useState } from 'react'

import Poster from '../imgs/hacker.svg'
import hamburger from '../imgs/hamburger.svg'
import Nav from './Nav'


const Home = () => {
    const [nav, setnav] = useState(false)
  return (
    <section className='back-split h-screen text-center'>
      <div className='back-gradient h-screen px-28 grid'>
        <div className='fixed right-20 top-14 '>
          <button className='btnH ' onClick={()=>setnav(true)}><img src={hamburger} alt="" /></button>
        </div>
        <Nav nav={nav} setnav={setnav}/>
        <div className="grid grid-cols-3 col-span-2 justify-center items-center ">
          <div className='text-left w-96'>
            <h2 className='text-3xl text-[#89618A] z-10'>Web Developer</h2>
            <h1 className='text-5xl font-bold text-white'>Prashnta Pandey</h1>
          </div>
          <img src={Poster} alt="poster" className='scale-125 relative' />
          <div className='text-white'>
            <p>
            Hi, there I am a web developer loves to design websites . I love coding and experiment with it..
            </p>
          </div>
          </div> 
          <div className="grid gap-11 grid-cols-3 col-span-2 mt-6">
            <div className='text-left'>
              <h3 className='text-2xl text-[#C099E4]'>Born In</h3>
              <h4 className='text-3xl font-bold text-white'>Kathmandu</h4>
            </div>
            <div className='text-center'>
              <h3 className='text-2xl text-[#C099E4]'>Experience</h3>
              <h4 className='text-3xl font-bold text-white'>2 Years</h4>
            </div>
            <div className='text-right'>
              <h3 className='text-2xl text-[#C099E4]'>Date</h3>
              <h4 className='text-3xl font-bold text-white'>29th September, 2000</h4>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home