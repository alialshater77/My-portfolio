import {Suspense , useEffect , useState} from 'react';
import { Canvas } from '@react-three/fiber';
// import { extend } from '@react-three/fiber';
import { OrbitControls , Preload , useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";
// extend({ OrbitControls})

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <>
    <ambientLight />
    <pointLight intensity={4}/>
    <hemisphereLight intensity={0.5} groundColor="black"/>
    <directionalLight intensity={2}/>
    <mesh> 
    <spotLight position={[-20 , 50 , 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
        />
        <primitive 
        object={computer.scene}
        scale ={isMobile? 0.5 :0.70}
        position={isMobile? [0 , -3 , -1]:[0 , -3.5 , -1.5]}
        rotation ={[-0.01 , -0.2 , -0.1]}
        />     
    </mesh>
    </>
  )
}

const ComputerCanvas =() =>{
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

  return(
    <Canvas frameloop='demand' shadows
    camera={{ position: [20 , 3 ,5], fov:25}}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputerCanvas;