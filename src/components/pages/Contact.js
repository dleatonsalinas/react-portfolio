import React from 'react';
import '../styles/style.css';

export default function Contact() {
  return (
    <div className="contact-bkrd">
      <section className="contact" id="contact">
        <h5>CONTACT</h5>
        <div className="contact-container">
          <form action="mailto: daniellesalinas721@gmail.com">
            <label htmlFor="yname">Your Name</label>
            <input type="text" id="yname" name="yourname" placeholder="Your Name" />

            <label htmlFor="email">E-mail Address</label>
            <input type="text" id="email" name="email" placeholder="E-mail Address" />

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Say hello!" style={{height: "200px"}}></textarea>

            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
}
