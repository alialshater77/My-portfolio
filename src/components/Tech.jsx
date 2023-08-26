import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {technologies.map((tec) =>{
        return <div className='w-28 h-28' key={tec.name}>
          <BallCanvas icon ={tec.icon}/>
        </div>
      })}
    </div>
  )
}

export default SectionWrapper(Tech , "")