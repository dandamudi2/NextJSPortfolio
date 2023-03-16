import React from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import ConnectMe from './ConnectMe';

type MainProps = {
    
};

const Main:React.FC<MainProps> = () => {
    
    return(
          <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                   <p className='uppercase  text-sm tracking-widest text-gray-600'>LET's BUILD SOMETHING TOGETHER</p>
                  <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Srinivas</span>
                   </h1>
                   <h1 className='py-2 text-gray-700'>
                    A Full Stack Developer
                   </h1>
                   <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                   I’m focused on building responsive  web applications
            integrating back-end technologies.
                   </p>
                   <div className='flex flex-col items-center justify-between max-w-[330px] m-auto py-4'>
                     
                    <button type="button" className='uppercase text-black rounded-xl 
                     border-[#5651e5] border-2 py-3 px-3'>resume</button>
                    <ConnectMe />
                </div>
                </div>
            </div>
          </div>
    );
}
export default Main;