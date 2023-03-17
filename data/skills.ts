import { StaticImageData } from "next/image";

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


 let  DevSkills:{imageName:string | StaticImageData , name:string}[] =[

      {imageName:htmlImg,name:'Html'},
      
      {imageName:cssImg,name:'CSS'},
      
      {imageName:nextjsImg,name:'NextJS'},
      
      {imageName:javascriptImg,name:'Javascript'},
      
      {imageName:reactImg,name:'React'},
      
      {imageName:githubImg,name:'Github'},
      
      {imageName:sqlServerImg,name:'SQL Server'},
      
      {imageName:dotnetImg,name:'Dotnet Core'},

      {imageName:tailwindImg,name:'Tailwind CSS'},

      {imageName:figmaImg,name:'Figma'}

 ];


 export default DevSkills;