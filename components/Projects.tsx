import React from 'react';
import Projectitem from './Projectitem';


import PropertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
type ProjectsProps = {
    
};

const Projects:React.FC<ProjectsProps> = () => {
    
    return (
        <div id="projects" className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
             <div className='flex flex-col justify-center items-center'>
               <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
               <h2 className='py-4'>What I've Build</h2>
             </div>
               <hr/>
               <div className='grid md:grid-cols-2 gap-8'>
                 <Projectitem 
                  title='Property Finder' 
                   backgroundImg={PropertyImg.src}
                   projectUrl={'/property'}  />
              <Projectitem 
                  title='Crypto' 
                   backgroundImg={cryptoImg.src}
                   projectUrl={'/crypto'}  />
               <Projectitem 
                  title='Netflix' 
                   backgroundImg={netflixImg.src}
                   projectUrl={'/netflix'}  />
             <Projectitem 
                  title='Twich' 
                   backgroundImg={twitchImg.src}
                   projectUrl={'/twitch'}  />
                   
            </div>
            </div>
        </div>
    )
}
export default Projects;