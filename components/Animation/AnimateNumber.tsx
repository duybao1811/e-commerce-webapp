import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const AnimateNumber = ({ value }) => {
  return (
    <div style={{
      display: 'flex',
      fontSize: '8rem',
      fontWeight: 'bold',
      height: '10rem',
      width: '10rem',
      overflow: 'hidden',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000000'
    }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={value}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: 100, height: '100%', zIndex: 100 }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimateNumber