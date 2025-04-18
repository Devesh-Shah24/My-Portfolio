import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from './utils/particles';

import './App.scss'
import Skills from './containers/skills'
// import Resume from './containers/resume'
import About from './containers/about'
import Home from './containers/home'
import Project from './containers/project'
import Contact from './containers/contact'
import Navbar from './components/navBar'

function App() {
  const location = useLocation();

  const renderParticleJsInHomePage = location.pathname === "/";

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = (container) => {
  //   // console.log(container);
  // };

  if (!init) return null;

  return (
    
    <div className='App'>
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id='tsparticles'
          options={particlesConfig}
          // particlesLoaded={particlesLoaded}
           />
      )}


      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className='App_main-page_content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          {/* <Route index path='/resume' element={<Resume />} /> */}
          <Route index path='/skills' element={<Skills />} />
          <Route index path='/project' element={<Project />} />
          <Route index path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App; 