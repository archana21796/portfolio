import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
  const profession = ['Web Developer', 'UI Developer', 'Freelancer'];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    const currentWord = profession[index];
    let typingSpeed = isDelete ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDelete && charIndex < currentWord.length) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDelete && charIndex === currentWord.length) {
        setIsDelete(true);
        typingSpeed = 1000;
      } else if (isDelete && charIndex > 0) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDelete && charIndex === 0) {
        setIsDelete(false);
        setIndex((prev) => (prev + 1) % profession.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDelete, index]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);


  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillsList = [
    'HTML', 'CSS', 'Sass', 'Bootstrap', 'JavaScript', 'jQuery', 'React',
    'Redux', 'Laravel', 'PHP', 'MySQL', 'Git', 'Axios', 'VSCode'
  ];
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsList);
  }, []);

  return (
    <div className="styleApp">
      <Nav 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        contactRef={contactRef} 
        projectRef={projectRef} 
      />

      <Home refProp={homeRef} profession={text} />
      <About refProp={aboutRef} skillset={skills} />
      <Projects ref={projectRef} /> 
      <Contacts ref={contactRef}/>
      <Footer/>
    </div>
  );
}

export default App;
