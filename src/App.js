
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Skill from './components/skills/Skill';
import Service from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Qualification />
      <Skill />
      <Service />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
  );
}

export default App;
