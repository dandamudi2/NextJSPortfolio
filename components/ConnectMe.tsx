import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

type ConnectMeProps = {
    
};

const RedirectTo =(url:string) =>{

        
};




const ConnectMe:React.FC<ConnectMeProps> = () => {
    
    return (
        <div className='flex items-center justify-between max-w-[330px] m-auto py-4 gap-4'>

      
        <div  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
             <FaLinkedinIn size={22} />
        </div>
        <div  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
        <FaGithub size={22} />
        </div>
        <div  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
        <AiOutlineMail size={22} />
        </div>
        <div  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
        <BsPersonLinesFill size={22} />
        </div>
        </div>
    );
}
export default ConnectMe;