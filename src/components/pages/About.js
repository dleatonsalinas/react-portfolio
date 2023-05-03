import React from 'react';
import '../styles/style.css';
import DLSImg from '../images/DLSHeadshot2.jpg';

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-row">
        <div className="about-column">
          <section className="about-bio">
            <h5>About</h5>
            <p>
              Hey, I'm Danielle. I'm currently working on designing
              websites using HTML and CSS. I am a driven, open-minded, creative, and
              hardworking person with a high attention to detail. Most see me as caring,
              approachable, and non-judgmental.
            </p>
            <p><br />
              Lover of carnivorous plants, mother of three omnivorous children.
            </p>
          </section>
        </div>
        <div className="about-column">
          <section id="about-photo">
            <div className="about-photo">
              <img src={DLSImg} alt="Danielle Leaton-Salinas" style={{maxWidth: "500px"}} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
