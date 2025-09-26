import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
//import About from "./components/About";
import Projects from './components/Projects';
import Skills from './components/Skills'
import Contact from "./components/Contact";
import About from "./components/About";

export default function App({mode, setMode}) {
  return (
    <>
      <Navbar mode={mode} setMode={setMode}/>
      <Hero />
      <Projects/>
      <About/>
      <Skills/>
      <Contact />

      {/* <Contact /> */}
    </>
  );
}
