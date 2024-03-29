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
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaSass />, name: 'SASS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' }, { icon: <FaReact />, name: 'React' },
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
            <h2 className='skill' style={{ letterSpacing: '3px', marginTop: '114px', marginLeft:'152px' }}>Skills</h2>
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
            Highly innovative and results-driven Front-End Developer with a strong dedication to excellence. 
            Exceptional communication and team management abilities. 
            Passionate about development and innovation, 
            specializing in crafting solid, reusable, and visually captivating user experiences with code. 
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
