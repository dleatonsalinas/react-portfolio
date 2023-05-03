import React from 'react';
import '../styles/style.css';

export default function Project() {
  return (
    <ul className="work-other-grid-bkrd">
      <li className="work-other-container">
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
            <a href="https://www.placeholder.com"><img src="./other-project-placeholder.png"/></a>
          </footer>
        </div>
      </li>
    </ul>
  );
}
