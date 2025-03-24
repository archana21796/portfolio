"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = ({ refProp, skillset }) => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const circleRadius = 30;
  const circumference = 2 * Math.PI * circleRadius; 

  const strokeOffset = useTransform(scrollXProgress, [0, 1], [circumference, 0]);

  return (
    <div ref={refProp} className="styleAboutSection">
      <div className="styleAboutContent">
        <h2>Know Me More</h2>
        <p>
          I am an engineering graduate who started my career as an HR Recruiter.
          Later, I switched to IT as a
          <span className="styleProff" style={{ color: "red" }}> Web Developer</span>.
          <br />
          I have worked on multiple technologies and projects, gaining experience
          in both frontend and backend for 2 years.
          <br />
          I am an enthusiastic person, eager to upgrade my skills in my career,
          and I make decisions with a strong mindset.
        </p>
      </div>
      <div className="skillChart">
        <div id="example">
          <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" className="bg" stroke="lightgray" fill="none" strokeWidth="8" />
            
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              className="indicator"
              stroke="red"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset} 
            /> 
          </svg>

          <motion.div ref={ref} style={{ display: "flex", overflowX: "scroll" }}>
            {skillset.map((skill, index) => (
              <motion.button key={index} className="styleSkillButton">
                {skill}
              </motion.button>
            ))}
          </motion.div>
        </div>
        <StyleSheet />
      </div>

    </div>
  );
};

export default About;

// ==================  Styles  ==================

function StyleSheet() {
  return (
    <style>{`
            #example {
              width: 100vw;
              max-width: 400px;
              position: relative;
            }

            #example #progress {
                position: absolute;
                top: -65px;
                left: -15px;
                transform: rotate(-90deg);
            }

            #example .bg {
                 stroke: lightgray !important;
                fill: none !important;
            }

            #example .indicator {
                stroke: red; /* Change this to your desired stroke color */
                transition: stroke-dashoffset 0.3s ease-out;
            }

            #example div {
                display: flex;
                height: 70px;
                overflow-x: scroll;
                padding: 20px 0;
                margin: 0 auto;
                gap: 20px;
            }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #e12c5b;
            }

            #example button {
                width: 90px;
            }
    `}</style>
  );
}
