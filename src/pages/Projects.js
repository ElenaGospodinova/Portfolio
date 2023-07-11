import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import Grid from '@mui/material/Grid';

import { FaHtml5, FaCss3, FaSass, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import '../styles/Projets.css';

import Energy_Gym_video from '../img/Energy_gym_video.mov';
import Log from '../img/log.video.mov';
import TravelApp from '../img/travel_app.mov';
import EPAPE from '../img/EPAPE_ltd.mov';
import Energy_gym from '../img/Energy_gym.png';
import EPAPE_ltd from '../img/EPAPE_ltd.png';
import Travel_App from '../img/Travel_App.png';
import LogIn_And_Out from '../img/LogIn_And_Out.png';
import Blog from '../img/Travel_blog.png';

export default function Projects(props) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const projects = [
    {
      title: 'Energy Gym',
      photo: Energy_gym,
      githubLink: 'https://github.com/ElenaGospodinova/Energy-Gym',
      websiteLink: 'https://energy-fitness-camp.netlify.app/index.html',
      video: Energy_Gym_video,
      text: 'Website for a recently opened local gym. Developed with HTML5, CSS, Bootstrap, and JavaScript.',
      tools: [<FaHtml5/>, <FaCss3/>, <FaBootstrap/>, <FaJs/>],
    },
    {
      title: 'Log In and Out',
      photo: LogIn_And_Out,
      githubLink: 'https://github.com/ElenaGospodinova/Log-In-Out',
      websiteLink: 'https://music-log.netlify.app/',
      video: Log,
      text: 'Music Log In and Out website, developed using HTML, CSS, and JavaScript. Experience seamless user authentication and personalized music recommendations based on user preferences. Stay logged in and enjoy a hassle-free music streaming experience.',
      tools: [<FaReact/>, <FaBootstrap/>],
    },
    {
      title: 'Trip-App',
      photo: Travel_App,
      githubLink: 'https://github.com/ElenaGospodinova/Trip-App',
      websiteLink: 'https://your-travel-app.netlify.app',
      video: TravelApp,
      text: 'Trip-App website helping the user to plan a travel trip in London. Providing live time travel information for tube and buses services.',
      tools: [<FaReact/>,'APIs',<FaSass/>],
    },
    {
      title: 'EPAPE ltd',
      photo: EPAPE_ltd,
      githubLink: 'https://github.com/ElenaGospodinova/EPAPE-ltd',
      websiteLink: 'https://epape-ltd.netlify.app/',
      video: EPAPE,
      text: 'Construction company website. Presenting new way of corporate web design, development, and digital marketing.',
      tools:[<FaHtml5/>, <FaCss3/>,<FaBootstrap/>, <FaJs/>],
    },
    {
      title: 'Coming Soon - Travel Blog',
      photo: Blog,
      githubLink: 'https://github.com/ElenaGospodinova/Let-s-Travel',
      websiteLink: 'https://your-travel-guide-asia.netlify.app//',
      
    }
  ]
  return (
    <>
      <h3 className='projects'>My Projects</h3>
      <Grid container spacing={2} className='row'>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className='col-md-4'>
            <div
              className={`card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='bg-image hover-overlay ripple' data-mdb-ripple-color='light'>
                <Image src={project.photo} className='img-fluid'  />
                <a href='#!'>
                  <div
                    className='mask'
                    // style={{ backgroundColor: '#3e465f' }}
                  ></div>
                </a>
                {hoveredIndex === index && (
                  <video autoPlay loop muted className='video-overlay'>
                    <source src={project.video} type='video/mp4' />
                  </video>
                )}
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{project.title}</h5>
                <p className='card-text'>{project.text}</p>
                <p className='card-text' style={{fontSize:'2em'}}>{project.tools}</p>
                <a href={project.githubLink} className='btn button-p' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size='2x' style={{ width: '170px' }} />
                </a>
                <a href={project.websiteLink} className='btn button-p' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGlobeAsia} size='2x' style={{ width: '170px' }} />
                </a>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <button className='more'>
        <h3>See more on GitHub</h3>
        <a href='https://github.com/ElenaGospodinova'>
          <FontAwesomeIcon icon={faGithub} size='2x' style={{ width: '170px' }} />
        </a>
      </button>
    </>
  );
}