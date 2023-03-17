import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import AboutImg from '../public/assets/about.jpg';

type AboutProps = {
    
};

const About:React.FC<AboutProps> = () => {
    
    return(
        <div id="about" className='w-full md:h-screen p-2 flex items-center' style={{paddingTop:'85px'}}>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                 <div className='px-2 col-span-2'>
                  <div className='text-center'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                  </div>
         <p className='py-2 text-gray-600'>
            I specialize in building  responsive full stack web applications. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task.  I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React and web api's using asp.net core web api and SQL server. I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
           I started web development in 2011 and developed appications in various domains.
           
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>

                 </div>
                 <div className='w-full m-auto h-auto shadow-xl
                  shadow-gray-400 rounded-xl flex
                 items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={AboutImg} alt="/" />
                 </div>
            </div>
        </div>
    )
}
export default About;