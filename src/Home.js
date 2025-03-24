import React from 'react';
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = ({ refProp,profession }) => {
  return (
    <div ref={refProp} className="styleHome">
        <motion.div className='styleHomeContent'
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20,  duration:1.5 }}>
            <h2>Hello I'm</h2>
            <h1>ARCHANA S</h1>
            <h3>And I'm a <span style={{color:"#e12c5b"}}>{profession}|</span></h3>
            <div className='styleHomeIcons'>
                <div>
                    <a 
                        href="https://www.linkedin.com/in/archana-selvaraj-ab7184140/?trk=opento_sprofile_topcard"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin />
                    </a>
                </div>
                <div>
                    <a href='https://github.com/dashboard' target='_blank'
                    rel="noopener"><FiGithub />
                    </a>
                </div>
            </div>
        </motion.div>
        <motion.div className='homeImgContainer'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}></motion.div>
    </div>
  );
}

export default Home;
