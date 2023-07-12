import React from "react";
import Nav from "./components/Nav"
import Home from "./pages/Home";
import './App.css';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";



function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <section id="home">
          <Home  />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;



