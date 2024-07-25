import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const WorkSection = lazy(() => import('./components/Work/Work'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Skills = lazy(() => import('./components/Skills/Skills'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <WorkSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </>
  );
}

export default App;
