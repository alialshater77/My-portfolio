import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    mern,
    software,
    mui,
    expressjs,
    threejs,
    gym,
    university,
    dashboard,
    cryptocurrencies
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Services",
    },
    {
      id: "my-projects",
      title: "My Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "expressjs",
      icon: expressjs,
    },
    {
      name: "mui",
      icon: mui,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Tesla",
      icon: software,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web and mobile applications.",
        "Designing and implementing databases.",
        "Analyzing software requirements and designing appropriate solutions.",
        "Testing and debugging software.",
        "Managing and organizing software projects.",
        "Providing technical support and problem-solving for users."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: mern,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web and mobile applications using MERN Stack (MongoDB, Express.js, React.js, Node.js).",
        "Designing and implementing databases using MongoDB or other database management systems.",
        "Developing and enhancing user interfaces for web and mobile applications using React.js.",
        "Testing and debugging software.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "University Website",
      description:
        "Full responsive multi pages website using React.js. The university wwebsite aims to provide information and services to students and membersof the university, and the way to contact and register. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: university,
      source_code_link: "https://github.com/alialshater77/university-website",
      demo:"https://f356601f.university-website-ccq.pages.dev/"
    },
    {
      name: "GYM Page",
      description:
        "Gym website project using React.js, TypeScript and tailwindcss. This site allows users to know more information about the gym, the benefits and offers, and the way to contact and register.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typeScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/alialshater77/gym-TypeScript",
      demo:"https://gym-typescript-4m7.pages.dev/"
    },
    {
      name: "Admin Dashboard",
      description:
        "React Admin Dashboard using React , Material UI , Nivo Charts. This application consists of Light and Dark Mode , 4 different Charts, 3 different Data Table Pages , FAQ Page, Form Page, and Calendar Integration.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mui",
          color: "green-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/alialshater77/Admin-dashboard",
      demo: "https://admin-dashboard-bb8.pages.dev/"
    },
    {
      name: "Cryptoverse",
      description:
        "Cryptocurrency App using react best practices, State managment using Redux Toolkit, UI Creation using Ant Design , creating charts using Chart.js, Fetch data from two defrent APIs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reduxToolkit",
          color: "green-text-gradient",
        },
        {
          name: "antDesign",
          color: "pink-text-gradient",
        },
      ],
      image: cryptocurrencies,
      source_code_link: "https://github.com/alialshater77/Cryptoverse",
      demo:"https://cryptoverse-8zz.pages.dev/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };