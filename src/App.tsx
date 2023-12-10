import React from 'react';
import './App.css';
import logo from './logo2spidy.png'; // Update this path to your logo's location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="links">
          <a
            href="https://birdeye.so/token/AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY?chain=solana"
            className="buy-now-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
          <a
            href="https://github.com/itsmodsiw/spidy"
            className="repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Repository
          </a>
        </div>
        <div className="social-links">
          <a href="https://twitter.com/tolyspider" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://t.me/Tolysspider" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
