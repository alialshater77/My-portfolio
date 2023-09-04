import React, { Fragment } from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant , fadeIn } from '../utils/motion';

const ExperienceCard =({exp}) =>{
  return <VerticalTimelineElement
  contentStyle={{ background:'#1d1836' , color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  iconStyle={{background: exp.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={exp.icon} alt={exp.company_name}
      className="w-full h-full object-contain rounded-full"
      />
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{exp.title}</h3>
      
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {exp.points.map((point , index) =>{
        return <li key={`exp-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      })}
    </ul>
  </VerticalTimelineElement>
}

const Experience = () => {
  return <Fragment>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What i can offer</p>
        <h2 className={styles.sectionHeadText}>Services.</h2>
      </motion.div>
      <motion.p variants={fadeIn("" ,"" ,0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am committed to delivering the highest level of quality in my work and consider myself a creative 
        and experienced developer. I believe that technology can bring positive change to our lives and businesses. 
        If you are looking for a React.js developer who can turn your vision into an amazing web application, I am here to help.
      </motion.p>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp , idx) =>{
            return <ExperienceCard key={idx} exp={exp}/>
          })}
        </VerticalTimeline>
      </div>
    </Fragment>
}

export default SectionWrapper(Experience , "work");