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
              Hey, I'm Danielle. I am a driven, open-minded, creative, and hardworking person. Most see me as caring, 
              approachable, and non-judgmental.
              <br></br><br></br>
              I graduated from The University of Kansas Full Stack Web Development Bootcamp in 2023, where I honed my technical 
              skills and gained practical experience in designing and building intuitive and visually appealing user interfaces. 
              <br></br><br></br>
              With a strong foundation in web development, I possess a deep understanding of front-end technologies 
              such as HTML, CSS, and JavaScript, allowing me to create interactive and user-centric designs. I am proficient 
              in utilizing design tools such as Sketch, Adobe XD, and Figma to prototype and wireframe innovative solutions.
              <br></br><br></br>
              My background in full-stack development enables me to bridge the gap between design and development, ensuring 
              the seamless integration of design concepts into functional, responsive web applications. I have a keen eye for 
              detail and a passion for creating visually compelling experiences that enhance user satisfaction and engagement.
             <br></br><br></br>
              Outside of work, I'm a lover of carnivorous plants and proud mother of three omnivorous children.
            </p>
          </section>
        </div>
        <div className="about-column">
          <section id="about-photo">
            <div className="about-photo">
              <img src={DLSImg} alt="Danielle Leaton-Salinas" style={{ maxWidth: "500px" }} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
