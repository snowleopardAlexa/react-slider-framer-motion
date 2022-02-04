import './App.css';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import photosSlider from './data';

function App({ id }) {
  return (
    <div className="app">
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {photosSlider.map((photoSlider) => {
            return (
              <motion.div className="item">
                <img src={photoSlider} key={id} alt=""
                />
              </motion.div>  
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
