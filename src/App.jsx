import { BrowserRouter} from "react-router-dom";
import { About , Contact , Experience , Hero , Navbar , Tech , Works, StarsCanvas } from "./components";

import './index.css';
import { useState , useEffect } from "react";

const App = () => {
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
    <BrowserRouter>
      <div className=" relative z-0 bg-primary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero isMobile={isMobile}/>
        </div>
        <About isMobile={isMobile}/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0 ">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
