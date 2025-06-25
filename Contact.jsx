import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or social links below.</p>
        <a href="2023253225.shubham@ug.shard.ac.in" className="email-link">2023253225.shubham@ug.shard.ac.in</a>
        <div className="social-links">
          <a href="https://github.com/Jstar45" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/shubham-singh-285981219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
