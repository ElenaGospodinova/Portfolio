import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3, FaSass,FaBootstrap, FaJs, FaReact, FaPython, FaDatabase, FaGithub, FaWordpress } from 'react-icons/fa';
import '../styles/About.css';
import Image from 'react-bootstrap/Image';
import Elena_Gospodinova from '../img/Elena_Gospodinova.png';

function About() {
  AOS.init();

  const skillsData = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaSass />, name: 'SASS' },
    {icon:<FaBootstrap/>, name:'Bootsrap'},
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaDatabase />, name: 'MySql' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaWordpress />, name: 'WordPress' },

    
    // Add more skills here
  ];

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Container className='about'>
      <Row>
        <Col className="skills" data-aos="zoom-in-right">
          <h3 className='bio'>About</h3>
          <div>
          <div className="shape"></div>
      <div className="photo-container">
        <Image src={Elena_Gospodinova} alt="Elena Gospodinova" id="photo" fluid />
      </div> 
            <h2 style={{ letterSpacing: '12px', marginTop: '120px' }}>Skills</h2>
            <hr />
          </div>
          {showMore
            ? skillsData.map((skill, index) => (
                <div key={index}>
                  <p className="prg">{skill.icon}</p>
                  <span className='name'>{skill.name}</span>
                </div>
              ))
            : skillsData.slice(0, 5).map((skill, index) => (
                <div key={index}>
                  <p className="prg">{skill.icon}</p>
                  <span className='name'>{skill.name}</span>
                </div>
              ))}
          <div>
            <button className="see-more" onClick={toggleShowMore}>
              {showMore ? 'See less' : 'See more'}
            </button>
          </div>
        </Col>
        <Col className="oneN" data-aos="zoom-in-left">
          <div>
            <p className="about-text">
            I am highly adaptable and driven by learning. If there is a problem, I seek ways to fix it. Whether it takes reading a book or picking up a lesson in a framework I don't know, I've grown to embrace the challenges that development can bring.

I am a highly self-motivated and goal-oriented professional committed to pursuing a long-term career in the tech industry. Coding has become my greatest passion, and I aspire to continuously develop and expand my skills while creating innovative projects. I thrive on the opportunity to challenge myself and improve my efficiency. With a proven track record of strong analytical and problem-solving abilities, I am dedicated to seeing projects through from inception to completion.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
