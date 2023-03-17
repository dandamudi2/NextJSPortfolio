import React from 'react';
import Projectitem from './Projectitem';
import AppWrapper from './AppWrapper';


import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import motorDirect from '../public/assets/projects/motorDirect.png';
type ProjectsProps = {
    
};

const Projects:React.FC<ProjectsProps> = () => {
    
    return (
        <div  id="projects" className='w-full '>
            <div className='max-w-[1240px] mx-auto px-2' style={{paddingTop:'85px'}}>
             <div className='flex flex-col justify-center items-center'>
               <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
               <h2 className='py-4'>What I've Build</h2>
             </div>
               <hr/>
             <div className='grid  md:grid-cols-2 gap-8'>
                 <Projectitem 
                  title='Motor Direct' 
                   backgroundImg={motorDirect} 
                   technology={'Asp.net,Sql Server,C#'}
                   projectUrl={'/property'}  />
              <Projectitem 
                  title='Crypto' 
                   backgroundImg={cryptoImg}
                   technology={'ReactJS'}
                   projectUrl={'/crypto'}  />
               <Projectitem 
                  title='Netflix' 
                   backgroundImg={netflixImg}
                   technology={'ReactJS'}
                   projectUrl={'/netflix'}  />
             <Projectitem 
                  title='Twich' 
                   backgroundImg={twitchImg}
                   technology={'ReactJS'}
                   projectUrl={'/twitch'}  />
            </div>
            </div>
        </div>
    )
}

export default Projects;