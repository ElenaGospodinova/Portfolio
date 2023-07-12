import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import '../styles/Home.css';
import Shape from '../img/top-img.png';





export default function Home() {

  const scrollToContact = () => {
    scroll.scrollTo('contact-section', {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>

      <div className="hero-content" >
       <img src={Shape} alt='Geometrical lines' className='top-img' data-aos="zoom-in"/>  
        <h2 className="one">Hi, I`m Elena Gospodinova</h2>
        
        <h3 className="two">Front-end Developer</h3>

      </div>
      <div className="hero-button">
      <Button variant="success" className="button" onClick={() => { window.open('mailto:gospodinovaelena@yahoo.co.uk'); scrollToContact(); }}>
          
          Contact Me
        </Button>
      </div>
      <div className='me' data-aos="fade-up" data-aos-duration="3000">
  <p>I'm focused on crafting solid, reusable and beautiful user experiences with code while having fun.</p>
</div>
      <div className="landing-end"></div>
      <div id="contact-section"></div>
      
    </>
  );
}
