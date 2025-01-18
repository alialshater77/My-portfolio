import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    redux,
    tailwind,
    nodejs,
    shadcn,
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
    abana,
    prokoders,
    bold,
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
      title: "Front-End Developer",
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
      name: "Next JS",
      icon: nextjs,
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
    // {
    //   name: "mui",
    //   icon: mui,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Build responsive, user-friendly, and interactive web interfaces using React.js.",
        "Optimize application performance with efficient state management libraries like Redux and Context API.",
        "Integrate RESTful APIs and GraphQL to connect front-end applications with back-end services.",
        "Create reusable, modular, and maintainable UI components using React best practices.",
      ],
    },
    {
      title: "Next.js Developer",
      company_name: "Starbucks",
      icon: nextjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Develop high-performance web applications with Server-Side Rendering (SSR) and Static Site Generation (SSG).",
        "Implement dynamic routing and API routes for efficient data handling.",
        "Optimize SEO for web applications using Next.js built-in features like metadata handling.",
        "Build multilingual applications with advanced internationalization (i18n) support.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Tesla",
      icon: software,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Design, develop, and maintain scalable and efficient software solutions tailored to business needs.",
        "Designing and implementing databases.",
        "Analyzing software requirements and designing appropriate solutions.",
        "Implement object-oriented programming and design patterns for clean and robust codebases.",
        "Perform thorough testing and debugging to ensure high-quality, bug-free applications.",
        "Collaborate across teams to design software architecture and solve complex problems.",
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "Tesla",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Develop scalable and secure server-side applications using Node.js.",
        "Build real-time applications using WebSocket and libraries like Socket.IO.",
        "Implement microservices architecture and optimize server performance.",
        "Integrate third-party APIs and services to enhance application capabilities.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: mern,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Build full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
        "Develop secure and scalable REST APIs and integrate them with front-end applications.",
        "Manage databases efficiently, including CRUD operations and aggregation pipelines in MongoDB.",
        "Deploy and maintain web applications on cloud platforms like AWS, Vercel, or Heroku.",
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
      name: "Abana",
      description:
        "A leading company in providing business solutions, digital transformation, and bespoke technology services for both government and business sectors in Saudi Arabia. The Abana Project is a multi language web application built using Next.js 14, designed with a robust Server-Side Rendering (SSR) strategy.",
      tags: [
        {
          name: "Next",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: abana,
      // source_code_link: "https://github.com/alialshater77/Admin-dashboard",
      demo: "https://www.abana.com.sa/"
    },
    {
      name: "Prokoders company website",
      description:
        "Developed my company's multilingual website from scratch using Next.js 15 with a combination of SSR and SSG for optimal performance, implementing dark and light themes, and styled with TailwindCSS and ShadCN for a modern, responsive design.",
      tags: [
        {
          name: "Next",
          color: "blue-text-gradient",
        },
        {
          name: "Shadcn",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: prokoders,
      // source_code_link: "https://github.com/alialshater77/Admin-dashboard",
      demo: "https://prokoders.com/en"
    },
    {
      name: "BOLD Bespoke Design",
      description:
        "BOLD Bespoke Design is a well-established furniture manufacturer based in Dubai, known for crafting luxury interior furniture that reflects the client's distinct taste and lifestyle. I Developed a dynamic project using pure JavaScript and Tailwind CSS, integrating seamlessly with Laravel Blade templates to create responsive and interactive user interfaces",
      tags: [
        {
          name: "pure javascript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bold,
      // source_code_link: "https://github.com/alialshater77/Admin-dashboard",
      demo: "https://bolduae.com/en"
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