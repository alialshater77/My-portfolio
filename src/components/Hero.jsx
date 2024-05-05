import React from 'react';
import { ComputersCanvas } from './canvas';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { me } from '../assets';


const Hero = ({isMobile}) => {
  
  return (
    <section className='relative w-full h-screen mx-auto flex flex-col justify-center items-center gap-4'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        
        <div className=' mb-10'>
          <h1 className={`${styles.heroHeadText} text-white whitespace-nowrap`}>Hi , I'm <span className="text-[#915eff]">Ali</span></h1>
          {!isMobile && 
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Experienced Front-End <br className='sm:block hidden'/>
          Developer.
          </p>
          }
        </div>
      </div>
      {isMobile ? 
        (
          <div className=' w-[80%] flex flex-col justify-center items-center mt-32'>
            <motion.div
            variants={fadeIn("" ,"" ,0.1, 1)}
            className=' flex justify-center items-center w-1/2 h-1/2 rounded-full'>
              <img className=' w-full object-contain rounded-full ' src={me} />
            </motion.div>
            <p className='text-white text-[26px] font-bold whitespace-nowrap'>
              Front End Developer
            </p> 
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
              I develop 3D visuals, user <br className='sm:block hidden'/>
              interfaces and web application.
            </p>
            <button className='bg-tertiary py-3 px-8 outline-none w-fit font-bold
            text-white shadow-md shadow-primary rounded-xl mt-3 z-20'
            
            >
              <a href='/#contact'>Hire Me</a>
            </button>
          </div>
        )
        : 
        (<ComputersCanvas isMobile={isMobile}/>)
      }
      
      <div className='absolute xs:bottom-[10px] bottom-[10px] w-full flex justify-center items-center mt-2'>
        <a href='#about'>
          <div className='w-[30px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{
              y:[0 ,24 , 0]
            }}
            transition={{duration:1.5 , repeat:Infinity , repeatType:"loop"}}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero