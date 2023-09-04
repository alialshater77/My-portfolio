import React, { Fragment } from 'react';
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
          Hello, my name is Ali Alshater and i am a professional React.js developer.
          I have been developing web applications using React.js for over 2 years and 
          have completed numerous successful projects for clients in various industries.
          I am passionate about creating amazing user experiences and 
          providing innovative technical solutions.

          Throughout my career, I have developed dynamic and fast web applications using React.js and its multiple libraries like Redux and React Router.
          I have worked on improving application performance and delivering seamless and flexible user experiences.

          I hold a bachelor's degree, and now i am studying in the fifth year of computer engineering in Damascus University and have completed training courses in web application development using React.js
          and other front-end technologies.

        </motion.p>
        <motion.div
          variants={fadeIn("" ,"" ,0.1, 1)}
          className=' xs:w-1/2 xs:h-1/2 md:w-1/4 md:h-1/4 rounded-full xs:mt-4 xs:mb-6 '>
            <img className=' w-full h-full object-contain rounded-full ' src={me} />
        </motion.div>
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