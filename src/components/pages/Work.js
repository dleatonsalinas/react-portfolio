import React from 'react';
import '../styles/style.css';
import FP1Img from '../images/featured-project-litchat.png';
import FP2Img from '../images/featured-project-weather.png';
import FP3Img from '../images/featured-project-coding-quiz.png';
import OtherProject1 from '../images/featured-project-air-pollution.png';
import OtherProject2 from '../images/other-readme-generator.png';
import OtherProject3 from '../images/other-team-profile.png';
import OtherProject4 from '../images/other-project-booksearch.png';
import OtherProject5 from '../images/other-project-workday.png';
import OtherProject6 from '../images/featured-project-horiseon.png';

export default function Work({ handlePageChange }) {
  const navigateToLitChat = () => {
    handlePageChange('LitChat');
  };

  return (
      <div className="work" id="work">
        <h5>Work</h5>
        <ul className="work-featured">
          <li className="featured-items1">
            <div className="featured-projects-content-R1">
              <p className="featured-project-header-R1">Featured Project</p>
              <h6 className="featured-project-title-R1">
                <span onClick={navigateToLitChat}>LitChat</span>
              </h6>
              <div className="featured-description-R1">
                <p>
                  LitChat is a dynamic and engaging website designed for literature enthusiasts to connect and share their thoughts on their favorite books.<br></br><br></br><i>(Click the photo to the left for more details.)</i>
                </p>
              </div>
              <div className="featured-project-photo-R1">
              <span onClick={navigateToLitChat}>
                  <img src={FP1Img} alt="Website Landing Page" />
                </span>
              </div>
            </div>
          </li>
        </ul>
        <br /><br />
        <ul className="work-featured">
          <li className="featured-items2">
            <div className="featured-projects-content-L">
              <p className="featured-project-header-L">Featured Project</p>
              <h6 className="featured-project-title-L">
                <a href="https://dleatonsalinas.github.io/weather-dashboard/">Weather Dashboard</a>
              </h6>
              <div className="featured-description-L">
                <p>
                  A website that displays the current weather and 5-day forecast for a searched city utilizing HTML, JavaScript, CSS, Bootstrap, and OpenWeather API.
                </p>
              </div>
              <div className="featured-project-photo-L">
                <a href="https://github.com/dleatonsalinas/weather-dashboard"><img src={FP2Img} alt="Weather Dashboard" /></a>
              </div>
            </div>
          </li>
        </ul>
        <br /><br />
        <ul className="work-featured">
          <li className="featured-items3">
            <div className="featured-projects-content-R2">
              <p className="featured-project-header-R2">Featured Project</p>
              <h6 className="featured-project-title-R2">
                <a href="https://dleatonsalinas.github.io/code-quiz/">Coding Quiz</a>
              </h6>
              <div className="featured-description-R2">
                <p>
                A timed coding quiz with multiple-choice questions built with HTML, CSS, and JavaScript.</p>
              </div>
              <div className="featured-project-photo-R2">
                <a href="https://dleatonsalinas.github.io/code-quiz/"><img src={FP3Img} alt="Website Landing Page" /></a>
              </div>
            </div>
          </li>
        </ul>
        <p className="work-other-header">Other Projects</p>
        <div className="work-other-grid-bkrd">
          <div className="work-other-container">
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://cyril1743.github.io/GPS-Satellite/">Air Pollution Levels</a>
                </h6>
                <div className="work-other-description">
                  <p>
                  An interactive website to show air pollution levels based on a searched location. This was built using html, CSS, JavaScript, and utilizes API calls from Google Maps and OpenWeatherMap.
                </p>
                </div>
              </header>
              <footer>
                <a href="https://cyril1743.github.io/GPS-Satellite/"><img src={OtherProject1} alt="Air Pollution Levels" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://github.com/dleatonsalinas/readme-generator">README Generator</a>
                </h6>
                <div className="work-other-description">
                  <p>
                  A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package in Node.js.</p>
                </div>
              </header>
              <footer>
                <a href="https://github.com/dleatonsalinas/readme-generator"><img src={OtherProject2} alt="ReadMe Generator" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://github.com/dleatonsalinas/team-profile-generator">Team Profile Generator</a>
                </h6>
                <div className="work-other-description">
                  <p>
                  A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. </p>
                </div>
              </header>
              <footer>
                <a href="https://github.com/dleatonsalinas/team-profile-generator"><img src={OtherProject3} alt="Team Profile Generator" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://github.com/dleatonsalinas/horiseon-refactor">Book Search Engine</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    A book search engine utilizing Google Books API search engine with GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.</p>
                </div>
              </header>
              <footer>
                <a href="https://github.com/dleatonsalinas/horiseon-refactor"><img src={OtherProject4} alt="Book Search Engine" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://github.com/dleatonsalinas/work-day-scheduler">Work Day Scheduler</a>
                </h6>
                <div className="work-other-description">
                  <p>
                  Simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                  </p>
                </div>
              </header>
              <footer>
                <a href="https://github.com/dleatonsalinas/work-day-scheduler"><img src={OtherProject5} alt="Work Day Scheduler" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://github.com/dleatonsalinas/horiseon-refactor">Horiseon</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    Refactored existing Horiseon website. Modified HTML and CSS files for improved accessibility and search engine optimization.</p>
                </div>
              </header>
              <footer>
                <a href="https://github.com/dleatonsalinas/horiseon-refactor"><img src={OtherProject6} alt="Horiseon" /></a>
              </footer>
            </div>
          </div>
        </div>
      </div>
  );
}