import "../styles/Footer.css"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import elly from '../img/elly.jpg';

export default function Footer() {
  return (
    <MDBFooter  className='text-center text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section> */}

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon className="me-3" />
                <img src={elly} alt= "My logo" className="logo"/>Elena Gospodinova
              </h6>
              <p>
              Web Developer by Heart, Innovator by Design: Fueling my Passion for Digital Experiences.
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                London, UK
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                gospodinovaelena@yahoo.co.uk
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 44 (0) 780 0051 4496
              </p>


        <div>
        <section className='mb-4'>
        <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' className="icons"/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' className="icons" />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='codepen' className="icons" />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundImage: 'radial-gradient(circle, rgba(255,201,89,1) 0%, rgba(230,0,139,1) 100%)'}}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' className="icons" />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' className="icons"/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' className="icons"/>
          </MDBBtn>
          </section>
        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'>
        © 2023  
          
        <br/>
        <a className='text-reset fw-bold' href='https://github.com/ElenaGospodinova'>
          Elena Gospodinova
        </a>
      </div>
    </MDBFooter>
  );
}