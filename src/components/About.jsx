import React, { Fragment, useState , useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { me } from '../assets';

const ServiceCard =({title , index , icon}) =>{
  return (
    <Tilt className=" w-full xs:w-[250px]">
      <motion.div variants={fadeIn("right" , "spring" , 0.5 * index , 1.5)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className={
            "w-16 h-16 object-contain"
          }/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const [isMobile , setIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    setIsMobile(mediaQuery.matches);

    const handelMediaQuery = (event) =>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change' , handelMediaQuery);

    return () =>{
      mediaQuery.removeEventListener('change' , handelMediaQuery);
    }
  },[]);
  
  return (
    <Fragment>
      <motion.div variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className=' xs:flex-col-reverse lg:flex-row flex justify-between items-center'>
        <motion.p variants={fadeIn("" ,"" ,0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          <span>Hello, my name is Ali Alshater and i am a professional Full Stack developer.<br></br>
          I am a fifth-year Computer Engineering student with a strong passion for web development and creating cutting-edge digital experiences. With over four years of expertise in React.js and Next.js, I specialize in building dynamic and high-performance web applications, leveraging advanced rendering strategies like SSR and SSG.</span>

          <span>
          I have professional experience as a Front-End Web Developer, where I focused on improving application performance and delivering seamless and flexible user experiences. My skill set includes backend development with Node.js, Express, and MongoDB, where I have one year of experience creating robust full-stack applications.
          </span>

          Additionally, I have hands-on experience with Three.js for creating 3D visualizations, as well as WebSocket technology for developing real-time interactive applications. I am committed to refining my craft, exploring innovative solutions, and contributing to impactful projects that push the boundaries of technology.

        </motion.p>
        {!isMobile && (
        <motion.div
            variants={fadeIn("" ,"" ,0.1, 1)}
            className=' xs:w-1/2 xs:h-1/2 md:w-1/4 md:h-1/4 rounded-full xs:mt-4 xs:mb-6 '>
              <img className=' w-full h-full object-contain rounded-full ' src={me} />
            </motion.div>) 
        }
      </div>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((e, idx) =>{
          return(
            <ServiceCard key={e.title} index={idx} {...e}/>
          )
        })}
      </div>
    </Fragment>
  )
}

export default SectionWrapper(About , "about")