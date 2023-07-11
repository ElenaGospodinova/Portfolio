import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import elly from '../img/elly.jpg';
import '../styles/Navbar.css';
import Elena_Gospodinova from '../img/Elena_Gospodinova.docx'
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand='lg'
      className='navbar-transparent fixed-top'
      expanded={expanded}
      style={{ marginTop: '20px' }}
    >
      <div className='container'>
        <div
          onClick={() => {
            scroll.scrollToTop();
            closeNavbar();
          }}
          className='navbar'
        >
          <img
            src={elly}
            alt='My Logo'
            style={{ margin: '30px', width: '50px', height: '50px', borderRadius: '12px' }}
            className='logo'
          />
        </div>
        <Navbar.Toggle
          aria-controls='navbarNav'
          onClick={toggleNavbar}
          className={`navbar-toggler${expanded ? ' collapsed' : ''}`}
        />
        <Navbar.Collapse id='navbarNav'>
          <ul
            className={`navbar-nav ml-auto${expanded ? ' show' : ''}`}
            onClick={closeNavbar}
          >
            <li className='nav-item'>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-link'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-link'
              >
                Projects
              </Link>
              </li>
              <li className='nav-item'>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-link'
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-link'
              >
                Contact
              </Link>
            </li>
            {/* Social icons */}
            <li className='nav-item'>
              <a href='https://www.linkedin.com' className='nav-link'>
                <FaLinkedin />
              </a>
            </li>
            <li className='nav-item'>
              <a href='https://github.com' className='nav-link'>
                <FaGithub />
              </a>
            </li>
            <li className='nav-item'>
              <a href='mailto:gospodinovaelena@yahoo.co.uk' className='nav-link'>
                <HiOutlineMail />
              </a>
            </li>
            <li className='nav-item'>
              <a
                href={Elena_Gospodinova}
                className='nav-link resume'
                download
              >
                <BsFillPersonLinesFill />
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavBar;
