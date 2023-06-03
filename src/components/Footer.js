import React from 'react';
import './styles/style.css';
import GitHub from './images/GitHubLogo.png';
import Instagram from './images/InstagramLogo.png';
import LinkedIn from './images/LinkedInLogo.png';
import BMAC from './images/BuyMeACoffeeLogo.png';

function Footer({ currentPage, handlePageChange }) {
  return (
    <>
      <ul className="contact-links">
        <li>
          <a href="https://github.com/dleatonsalinas">
            <img src={GitHub} alt="GitHub Logo" />
            <br />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_daniellesalinas_/">
            <img src={Instagram} alt="Instagram Logo" />
            <br />
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danielle-ls-111563248/">
            <img src={LinkedIn} alt="LinkedIn Logo" />
            <br />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.buymeacoffee.com/dleatonsalinas">
            <img src={BMAC} alt="Buy Me a Coffee Logo" />
            <br />
            Buy me a coffee
          </a>
        </li>
      </ul>
      <footer>
        <div className="footer">
          <p>
            Designed + Built with 🤍 by Danielle Leaton-Salinas
            <br />
            ©2022 Danielle Leaton-Salinas | Do Not Copy | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
