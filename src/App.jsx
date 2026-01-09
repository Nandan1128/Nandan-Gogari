import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <Analytics />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
