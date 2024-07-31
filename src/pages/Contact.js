import React, { useRef, useState } from 'react';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

export default function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('Send');

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    emailjs
      .sendForm('service_sxlo62s', 'template_jx6omqo', form.current, 'HlTo7Q8UCxcw7S6Q6')
      .then((result) => {
        console.log(result.text);
        console.log('message send');
        setFormStatus('Sent');
      })
      .catch((error) => {
        console.log(error.text);
        setFormStatus('Error');
      });
  };

  return (
    <>
      <div className="container mt-5 contact">
        <form ref={form} onSubmit={sendEmail} className="row g-3">
        <h3 className="mb-3 ">Contact Me</h3>
        <br/>
          <div className="col-md-6">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" name="name" required />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" name="email" required />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" name="message" required />
          </div>
          <div className="col-12">
            <button className="btn btn-success send" type="submit">
              {formStatus}
            </button>
          </div>
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
