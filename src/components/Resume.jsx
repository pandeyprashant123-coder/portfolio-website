import React from 'react'
import Dots from './Dots'

const Resume = () => {
  return (
    <section className='bg-[#260C40]'>
        <div className='back-gradient flex flex-col py-11  px-28 pb-8'>
            <h1 className='text-8xl font-medium text-white mb-11'>My Resume</h1>
            <div className='flex flex-row'>
                <div className='w-96 text-white text-3xl text-right font-semibold border-r-2 border-[#C099E4] pr-4'>
                <h1>
              10
              <br /> Projects
            </h1>
            <br />
            <br />
            <h1>
              3<br />
              Awards
            </h1>
            <br />
            <br />
            <h1>
              Many
              <br />
              happy clients
            </h1>
                </div>
                <div className='flex flex-col gap-10 text-white pl-8 pr-10 w-3/4'>
                    <p>My name is prashnta pandey.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    <div className=''>
                        <h1 className='text-2xl font-bold'>SKILLS</h1>
                        <div className='flex flex-row gap-5 py-5'>
                            <div className='text-xl font-semibold flex flex-col gap-5'>
                                <div className='flex flex-row gap-9 justify-between items-center'>
                                    <h1>React</h1>
                                    <Dots num={7} colorL={'bg-blue-400'}/>
                                </div>
                                <div className='flex flex-row gap-9 justify-between items-center'>
                                    <h1>NodeJS</h1>
                                    <Dots num={6} colorL={'bg-green-700'}/>
                                </div>
                                <div className='flex flex-row gap-9 justify-between items-center'>
                                    <h1>MongoDB</h1>
                                    <Dots num={5} colorL={'bg-green-400'}/>
                                </div>
                                <div className='flex flex-row gap-9 justify-between items-center'>
                                    <h1>C++</h1>
                                    <Dots num={8} colorL={'bg-blue-400'}/>
                                </div>
                                <div className='flex flex-row gap-9 justify-between items-center'>
                                    <h1>Python</h1>
                                    <Dots num={6} colorL={'bg-yellow-300'}/>
                                </div>
                                <div className='flex flex-row gap-9 justify-between items-center'>
                                    <h1>CSS</h1>
                                    <Dots num={9} colorL={'bg-blue-400'}/>
                                </div>
                                <div className='flex flex-row gap-9 justify-between items-center'>
                                    <h1>DSA</h1>
                                    <Dots num={5} colorL={'bg-red-500'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div  className='flex flex-col gap-3'>
                            <h1 className='text-3xl font-semibold'>Education</h1>
                            <div>
                                <p className='text-[#89618A]'>2019 - 2021</p>
                                <h1 className='text-xl'>+2 Science</h1>
                                <p className='text-[#89618A]'>Advance Academy S.S</p>
                            </div>
                            <div>
                                <p className='text-[#89618A]'>2022 - present</p>
                                <h1 className='text-xl'>Bachlor in Computer Engineering</h1>
                                <p className='text-[#89618A]'>IOE,Purwanchal Campus Dharan-8</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-3xl font-semibold'>Experience</h1>
                            <div>
                                <p className='text-[#89618A]'>2021</p>
                                <h1 className='text-xl'>Kosthetik</h1>
                                <p className='text-[#89618A]'>Web Developer</p>
                                <p className='text-[#89618A]'>As a freelancer web designer and project handeler.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume