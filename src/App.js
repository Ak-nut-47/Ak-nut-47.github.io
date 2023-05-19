
import './App.css';
import Navbar from "./shared/navbar/Navbar"
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useRef } from 'react';
import Home from './components/Home';
import Skills from './components/Skills';
import Statistics from './components/Statistics';

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null);
  const scrollToSection = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth", });
  };
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="App" bg="#B3E5FC">
      <Navbar scrollToSection={scrollToSection} scrollToHome={scrollToHome} scrollToSkills={scrollToSkills} scrollToProject={scrollToProject} scrollToContact={scrollToContact} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
      <Statistics />
    </div>
  );
}

export default App;
