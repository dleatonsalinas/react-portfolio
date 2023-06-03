import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import FP1Img from '../images/featured-project-litchat.png';
import FP2Img from '../images/featured-project-weather.png';
import FP3Img from '../images/featured-project-air-pollution.png';
import OtherPHImg from '../images/other-project-placeholder.png';

export default function Work() {
  return (
    <div className="work-bkrd">
      <div className="work" id="work">
        <h5>Work</h5>
        <ul className="work-featured">
          <li className="featured-items1">
            <div className="featured-projects-content-R1">
              <p className="featured-project-header-R1">Featured Project</p>
              <h6 className="featured-project-title-R1">
                <Link to="/LitChat">LitChat</Link>
              </h6>
              <div className="featured-description-R1">
                <p>
                  LitChat is a dynamic and engaging website designed for literature enthusiasts to connect and share their thoughts on their favorite books.
                </p>
              </div>
              <div className="featured-project-photo-R1">
                <Link to="/LitChat">
                  <img src={FP1Img} alt="Website Landing Page" />
                </Link>
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
                <a href="https://www.placeholder.com">GPS Project</a>
              </h6>
              <div className="featured-description-R2">
                <p>
                  An interactive website to show air pollution levels based on a searched location. This was built using html, CSS, JavaScript, and utilizes API calls from Google Maps and OpenWeatherMap.
                </p>
              </div>
              <div className="featured-project-photo-R2">
                <a href="https://cyril1743.github.io/GPS-Satellite/"><img src={FP3Img} alt="Website Landing Page" /></a>
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
                  <a href="https://www.placeholder.com">Placeholder</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </header>
              <footer>
                <a href="https://www.placeholder.com"><img src={OtherPHImg} alt="Placeholder project" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://www.placeholder.com">Placeholder</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </header>
              <footer>
                <a href="https://www.placeholder.com"><img src={OtherPHImg} alt="Placeholder project" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://www.placeholder.com">Placeholder</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </header>
              <footer>
                <a href="https://www.placeholder.com"><img src={OtherPHImg} alt="Placeholder project" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://www.placeholder.com">Placeholder</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </header>
              <footer>
                <a href="https://www.placeholder.com"><img src={OtherPHImg} alt="Placeholder project" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://www.placeholder.com">Placeholder</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </header>
              <footer>
                <a href="https://www.placeholder.com"><img src={OtherPHImg} alt="Placeholder project" /></a>
              </footer>
            </div>
            <div className="work-other-items">
              <header>
                <h6 className="work-other-title">
                  <a href="https://www.placeholder.com">Placeholder</a>
                </h6>
                <div className="work-other-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </header>
              <footer>
                <a href="https://www.placeholder.com"><img src={OtherPHImg} alt="Placeholder project" /></a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}