import React from 'react';
import '../styles/style.css';

function Footer({ currentPage }) {
  return (
    <>
      <ul class="contact-links">
        <li>
          <a href="https://github.com/dleatonsalinas">
            <img src="../images/GitHubLogo.png" alt="GitHub Logo" />
            <br />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_daniellesalinas_/">
            <img src="../images/InstagramLogo.png" alt="Instagram Logo" />
            <br />
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/danielle-leaton-salinas-111563248/">
            <img src="../images/LinkedInLogo.png" alt="LinkedIn Logo" />
            <br />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.buymeacoffee.com/dleatonsalinas">
            <img src="../images/BuyMeACoffeeLogo.png" alt="Buy Me a Coffee Logo" />
            <br />
            Buy me a coffee
          </a>
        </li>
      </ul>
      <footer>
        <div class="footer">
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
