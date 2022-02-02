import './App.css';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import images from './images';

function App() {

const [width, setWidth] = useState(0);
const carousel = useRef();

useEffect(() => {
   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
}, []);

  return (
    <div className="app">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div 
           drag="x" 
           dragConstraints={{right: 0, left: -width}} 
           className="inner-carousel"
        >
          {images.map((item) => {
            return (
            <motion.div className="item" key={item.id}>
              <img src={item.img} alt="" />
            </motion.div>  
            );
          })}
        </motion.div>
      </motion.div>
    
    </div>
  );
}

export default App;
