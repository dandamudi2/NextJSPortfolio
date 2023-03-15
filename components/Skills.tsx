import React from 'react';
import Image from 'next/image';

import htmlImg from '../public/assets/skills/html.png';
import cssImg from '../public/assets/skills/css.png';
import nextjsImg from '../public/assets/skills/nextjs.png';
import javascriptImg from '../public/assets/skills/javascript.png';
import reactImg from '../public/assets/skills/react.png';
import githubImg from '../public/assets/skills/github1.png';
import mongoImg from '../public/assets/skills/mongo.png';
import firebaseImg from '../public/assets/skills/firebase.png';



const Skills:React.FC = () => {
    
    return (
        <div id="skills" className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl text-center tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-3 text-center'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={htmlImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Html</h3>
                                 </div>
                         </div>
                       </div>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={javascriptImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>JavaScript</h3>
                                 </div>
                         </div>
                       </div>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={cssImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>CSS</h3>
                                 </div>
                         </div>
                       </div>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={nextjsImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>NextJS</h3>
                                 </div>
                         </div>
                       </div>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={reactImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>React</h3>
                                 </div>
                         </div>
                       </div>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={mongoImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>MongoDB</h3>
                                 </div>
                         </div>
                       </div>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={githubImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Github</h3>
                                 </div>
                         </div>
                       </div>
                       <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={firebaseImg} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Firebase</h3>
                                 </div>
                         </div>
                       </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;