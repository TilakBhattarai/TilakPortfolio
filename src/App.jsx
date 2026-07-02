import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-bg text-ink overflow-hidden">
      <div className="noise-bg" />
      <div className="grid-overlay" />

      <ScrollProgress />
      <Navbar scrollTo={scrollTo} />

      <main className="relative z-10">
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Stats />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}