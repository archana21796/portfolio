import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="styleProject">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ color: "white", fontSize: 38, textAlign: "center" }}
      >
        PROJECTS
      </motion.h2>
      <p className="styleprojects" style={{ color: "white", textAlign: "center" }}>
        {"< Click cards to view the projects />"}
      </p>

      <div style={container} className="styleCardHolder">
        {links.map(({ logo, link, hueA, hueB }, i) => (
          <Card key={i} i={i} logo={logo} link={link} hueA={hueA} hueB={hueB} />
        ))}
      </div>
    </div>
  );
});

const Card = ({ logo, link, hueA, hueB, i }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="card-link"
    style={{ textDecoration: "none" }}
  >
  <motion.div
    className={`card-container-${i}`}
    style={cardContainer}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ amount: 0.8 }}
  >
    <div style={{ ...splash, background }} />
    <motion.div style={card} variants={cardVariants} className="card">
    <img src={logo} alt="Project Logo" style={logoStyle} />

    </motion.div>

  </motion.div>
  </motion.a>
  );
};

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */
const container = {
  // margin: "100px auto",
  // maxWidth: 600,
  paddingBottom: 100,
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -50,
  width: 600,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  fontSize: 164,
  width: 300,
  height: 400,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  marginRight:50,
};

const logoStyle = {
  width: "80%",
  height: "auto",
};

/**
 * ==============   Data   ================
 */
const links = [
  { logo: process.env.PUBLIC_URL + "/images/project1.png", link: "https://todolist-nu-liard.vercel.app/", hueA: 340, hueB: 10 },
  { logo: process.env.PUBLIC_URL + "/images/project2.png", link: "https://colorcoder-nine.vercel.app/", hueA: 20, hueB: 40 },
  { logo: process.env.PUBLIC_URL + "/images/project3.png", link: "https://apiaccessapp.vercel.app/", hueA: 60, hueB: 90 },
  { logo: process.env.PUBLIC_URL + "/images/project4.png", link: "https://social-app-mu-lilac.vercel.app/", hueA: 60, hueB: 90 },

];

export default React.memo(Projects);
