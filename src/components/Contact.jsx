import React ,{useState , useRef} from 'react';
import { motion } from 'framer-motion';
import {fadeIn, textVariant } from '../utils/motion';
import emailjs from "@emailjs/browser";
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { github } from '../assets';

const Contact = () => {
  const formRef = useRef();

  const [form , setForm] =useState({
    name:"",
    email:"",
    message:"",
  });

  const [loading , setLoading] = useState(false);

  const handelChange = (e) =>{
    const {name  ,value } = e.target;
    setForm({...form , [name]: value})

  }
  const handelSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_duk45kd','template_jlgbb4m',
    {
      from_name:form.name,
      to_name:'Ali',
      from_email:form.email,
      to_email: 'alialshater7@gmail.com',
      message: form.message,
    },'D5jCMpQsQyZ008CT_')
    .then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to Asap.');
      setForm({
        name:"",
        email:"",
        message:"",
      })
    }).catch((error)=>{
        setLoading(false);
        alert('Something went wrong.');
    })
  }

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Get in touch
      </p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
    </motion.div>
    
    <motion.p variants={fadeIn("" ,"" ,0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > 
        If you would like more information or to discuss collaboration opportunities, please feel free to contact me via the email or mobile number provided in the contact
        information. I look forward to working with you and achieving new successes in web application development.
      </motion.p>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left" , "tween" , 0.2 , 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className=' xs:flex-col md:flex-row flex justify-between items-center mb-10'>
          <p className=' text-white text-[26px]'>mobile number :</p>
          <p className='text-[26px]'>
            +963993171809</p>
        </div>
        <form ref={formRef} onSubmit={handelSubmit} 
        className="flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
            type="text"
            name = "name"
            value={form.name}
            onChange={handelChange}
            placeholder="Enter your name"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
            border-none font-medium
            '
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
            type="email"
            name = "email"
            value={form.email}
            onChange={handelChange}
            placeholder="Enter your email"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
            border-none font-medium
            '
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
            name = "message"
            value={form.message}
            onChange={handelChange}
            placeholder="Enter your message"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg 
            border-none font-medium
            '
            />
          </label>
          <div className=' flex justify-between items-center'>
            <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit font-bold
            text-white shadow-md shadow-primary rounded-xl
            '
            >
              {loading? 'Sending...' : "Send"}
            </button>
            <div className='flex items-center gap-2'>
              <div 
              className=' blue-gradient w-10 h-10 rounded-full flex justify-center 
              items-center cursor-pointer transition hover:-translate-y-1'
              onClick={() => window.open("https://www.linkedin.com/in/ali-alshater-603670222/", "_blank")}
              >
                <LinkedInIcon sx={{ color: "white"}}/>
              </div>
              <div  
              className=' instagram w-10 h-10 rounded-full flex justify-center 
              items-center cursor-pointer transition hover:-translate-y-1'
              onClick={() => window.open("https://www.instagram.com/ali.alshater/?next=%2F", "_blank")}
              >
                <InstagramIcon sx={{ color: "white"}}/>
              </div>
              <div onClick={() => window.open("https://github.com/alialshater77", "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition hover:-translate-y-1"
              >
                <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div 
      variants={slideIn("right" , "tween" , 0.2 , 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact , "contact")