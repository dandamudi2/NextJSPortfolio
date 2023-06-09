import React from 'react';
import Image from 'next/image';

import DevSkills from '../data/skills';
import htmlImg from '../public/assets/skills/html.png';
import cssImg from '../public/assets/skills/css.png';
import nextjsImg from '../public/assets/skills/nextjs.png';
import javascriptImg from '../public/assets/skills/javascript.png';
import reactImg from '../public/assets/skills/react.png';
import githubImg from '../public/assets/skills/github1.png';
import sqlServerImg from '../public/assets/skills/SqlServer.png';
import firebaseImg from '../public/assets/skills/firebase.png';
import dotnetImg from '../public/assets/skills/dotnet.png';
import tailwindImg from '../public/assets/skills/tailwind.png';
import figmaImg from '../public/assets/skills/figma.png';




const Skills:React.FC = () => {
    
    return (
        <div id="skills" className='w-full lg:h-screen p-2' style={{paddingTop:'85px'}}>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl text-center tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-3 text-center'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                  {
                    DevSkills.map((item,index) =>(
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                         <div className='grid grid-cols-2 gap-4 justify-between items-center'>
                               <div className='m-auto'>
                                 <Image  src={item.imageName} width={125} height={50} alt="/" />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>{item.name}</h3>
                                 </div>
                         </div>
                       </div>
                    ))
                      }
                </div>
            </div>
        </div>
    )
}
export default Skills;