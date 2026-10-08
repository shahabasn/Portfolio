import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseLight from './components/MouseLight';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
      }}
      className="subtle-grid"
    >
      <MouseLight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
