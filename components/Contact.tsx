import React from 'react';
import Image from 'next/image';
import ContactImg from '../public/assets/contact.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ConnectMe from './ConnectMe';
import AppWrapper from './AppWrapper';
type ContactProps = {
    
};

const Contact:React.FC<ContactProps> = () => {
    
    return (
        <div  className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto md:h-screen p-2' style={{paddingTop:'85px'}}>
                <div className='text-center'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                      Contact
                    </p>
                    <h2 className='py-4'>Get In Touch</h2>
                </div>
                    <div className='grid lg:grid-cols-5 gap-8'>
                          {/* left */}
                          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl 
                           shadow-gray-400 rounded-xl p-4'>
                            <div className='lg:p-4 h-full'>
                                <div>
                                  <Image className='rounded-xl hover:scale-105 
                                    ease-in duration-300' src={ContactImg}  alt='/'/>
                                </div>
                                <div>
                                    <h2 className='py-2'>Srinivasu Dandamudi</h2>
                                    <p>Full Stack Developer</p>
                                    <p className='py-4'>I am available for freelance or full-time positions. Contact me </p>
                                </div>
                            <div className='flex flex-col justify-start'>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='max-w-[330px]  py-4'>
                                    <ConnectMe />
                                </div>
                            </div>
                            </div>
                           
                          </div>
                         
                         {/* right */}

                         <div className='col-span-3 w-full h-auto shadow-xl
                          shadow-gray-400 rounded-xl lg:p-4'>
                          <div className='p-4'>
                               <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                     <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input type="text" 
                                         className='border-2 rounded-lg p-3 flex 
                                        border-gray-300'
                                        placeholder='Enter your name'
                                        />
                                     </div>
                                     <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input type="text" 
                                         className='border-2 rounded-lg p-3 flex 
                                        border-gray-300'
                                        placeholder='Enter phone number'
                                        />
                                     </div>
                                </div>
                                <div  className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input type="text" 
                                         className='border-2 rounded-lg p-3 flex 
                                        border-gray-300'
                                        placeholder='Enter email'
                                        />
                                </div>
                                <div  className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <textarea 
                                         className='border-2 rounded-lg p-3  
                                        border-gray-300' rows={10}
                                        placeholder='Enter message'
                                       ></textarea>
                                </div>
                                <button className='w-full p-4
                                 text-gray-100 uppercase mt-4'>Send Message</button>
                               </form>
                          </div>
                         </div>

                    </div>
            </div>
            <div className='flex  justify-center'>
                <Link href="/" >
                        <div className='rounded-full shadow-lg shadow-gray-400  p-4
                        cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
                        </div>
                </Link>
            </div>
        </div>
    )
}
export default AppWrapper(Contact,'contact','flex-1 w-full  md:flex-col');
