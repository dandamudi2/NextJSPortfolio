import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavLogo from '../public/assets/navLogo.png';

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';

import navLinks from '../data/navLinks';

import {MdDeveloperMode} from 'react-icons/md';



const Navbar:React.FC = () => {
    


    const [nav,setNav] =useState(false);
    const [shadow,setShadow] = useState(false);

    const [navBackground,setNavBackground] =useState('');

    useEffect(()=>{
      const handleShadow = () =>{
        

        if(window.scrollY >=90){
             setShadow(true);
        }
        else{
           setShadow(false);
        }
        
      };
      window.addEventListener('scroll',handleShadow)
    },[]);




    const handleNav = ()=>{
       
        setNav(!nav);

    }
    return (
       
        <div className={shadow?'fixed  w-full h-20 shadow-xl z-[100] bg-white':'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
              {/* <Image src={NavLogo} alt="" width={90}  height={50}  /> */}
              <div className='p-2 flex justify-center items-center'>
              <MdDeveloperMode className='text-black-500 mt-1' size={35} />
              <h1 className='text-[#5651e5] font-bold' style={{fontFamily:'cursive' }}>DS</h1>
              </div>
              <div>
                <ul className='hidden md:flex'>
                  {
                    navLinks.map((item,index)=>(
                      <Link className='ml-10 text-sm uppercase hover:border-b-3' key={index} href={item.url} >
                          <li>{item.title}</li>
                      </Link>
                    ))
                  }
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                   <AiOutlineMenu size={25} />
                </div>
              </div>
            </div>

             <div className={nav?'md:hidden fixed left-0 top-0 w-full h-screen bg-black/90':''}>
               <div className={nav?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen p-10 ease-in duration-500'
               :'fixed left-[-100%] top-0'}>
                    <div>
                    <div className='flex w-full justify-between items-center'>
                        {/* <Image src={NavLogo}  width={80} height={35} alt="/" /> */}
                        <div className='p-2 flex justify-center items-center'>
              <MdDeveloperMode className='text-black-500 mt-1' size={35} />
              <h1 className='text-[#5651e5] font-bold' style={{fontFamily:'cursive' }}>DS</h1>
              </div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:bg-red-300'>
                        <AiOutlineClose size={25} />
                        </div>
                    </div>
                     <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                     </div>
                     </div>
                  <div className='py-4 flex flex-col'>
                  <ul className='uppercase'>
                    {
                      navLinks.map((item,index)=>(
                        <Link key={index}  href={item.url}>
                           <li onClick={()=>setNav(false)} className='py-4 text-sm'>{item.title}</li>
                        </Link>
                      ))
                    }
                  </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5] '>Let's Connect</p>
                       
                    </div>
                    <div className='flex items-center justify-between w-[80%] sm:w-[80%] mt-2'>
                          
                    </div>
               </div>
               </div>
            </div>
        </div>
        
    )
}
export default Navbar;