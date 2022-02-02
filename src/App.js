import './App.css';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import images from './images';

function App() {
  return (
    <div className="app">
      <motion.div className="carousel">
        <motion.div drag="x" className="inner-carousel">
          {images.map((item) => {
            return (
            <motion.div className="item">
              <img src={item.img} alt="" key={item.id} />
            </motion.div>  
            );
          })}
        </motion.div>
      </motion.div>
    
    </div>
  );
}

export default App;
