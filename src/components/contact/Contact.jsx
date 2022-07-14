import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ucjr2bw', 'service_ucjr2bw', form.current, 'aQ_As6f1PVKHjOPAI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/ernest.achiever"  target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>+123 45566789</h5>
            <a href="https://api.whatsapp.com/send?phone=963366614455"  target="_blank">Send a message</a>
          </article>
        </div>
        {/*END of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Your Message" required/>
          <button type='submit' className='btn btn-primary
          +'>Send Message</button>          
        </form>
      </div>
    </section>
  )
}

export default Contact;
