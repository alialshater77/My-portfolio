import React ,{useState , useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();

  const [form , setForm] =useState({
    name:"",
    email:"",
    message:"",
  });

  //Service id : service_kbutic3
  //Template ID:template_jlgbb4m
  //Puplic key: Ku0061iuzzIltiVVn

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
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left" , "tween" , 0.2 , 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handelSubmit} 
        className="mt-12 flex flex-col gap-8"
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
          <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit font-bold
          text-white shadow-md shadow-primary rounded-xl
          '
          >
            {loading? 'Sending...' : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div 
      variants={slideIn("right" , "tween" , 0.2 , 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , "contact")