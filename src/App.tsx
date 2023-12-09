import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-layout">

          <div className="text-card">
            <img src="/logo2spidy.png" className="App-logo" alt="logo" />
            <h1 className="main-title">Free Spider, Anatoly's Vision</h1>
            <h3 className="sub-title">WE WANT TO FREE SPIDERMAN IP we swap until we WIN #FREESPIDY</h3>
            {/* Twitter link */}
            <a href="https://twitter.com/aeyakovenko/status/1733300877619064943" target="_blank" rel="noopener noreferrer" className="twitter-link">Original Tweet</a>
            <h3 className="sub-title">ONLY CONTRACT</h3>
            <h2 className="sub-title">AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY</h2>
            <a href="https://birdeye.so/token/AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY?chain=solana" className="contract-link" target="_blank" rel="noopener noreferrer">BUY HERE</a>
            <h3 className="sub-title">Airdrop for Solana Community</h3>
            <h3 className="sub-title">This is the Only real SPDR - spiderswap.io</h3>

            <div className="instructions">
              <div className="instruction-item">
                <h3>50% Supply sent to Anatoly Yakovenko</h3>
                <a href="https://solscan.io/tx/2Vs1udyL8Fv3Bd1Xu1A6rrc8JtF2bBL6UGZtwgCiwJyct7DWhYySuYzS75WVdv9rJNhiFwvQmvXLG8TN6PA3Ym2C" target="_blank" rel="noopener noreferrer">Anatoly Supply</a>
              </div>
              <div className="instruction-item">
                <h3>20% Supply sent to Raydium LP/Tokens burnt</h3>
                <a href="https://solscan.io/tx/3dHMfNJdFa7sr83shbK2PvcGL2YAr3PkzuwE3WBttRtr6Sz2a4bK7nLtz9d1ghMzXdqUPNsJSt5shh1v5d8zxyjY" target="_blank" rel="noopener noreferrer">LP Token Burnt</a>
              </div>
              <h3>1% Supply sent for devs</h3>
              <h3>29% Supply to be distributed to Solana NFT Community</h3>
              <a href="https://solscan.io/token/AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY" className="contract-link" target="_blank" rel="noopener noreferrer">Toly's Spider (SPDR) | Solscan</a>
            </div>
          </div>

          <div className="image-container">
            <img src="/spidertweet.png" className="side-image" alt="Spider" />
          </div>

        </div>

        <footer>
          <a href="https://twitter.com/tolyspider" target="_blank" rel="noopener noreferrer">Link to Our X Account</a>
        </footer>
      </header>
    </div>
  );
}

export default App;