import React, {useEffect, useState} from "react";
import logo from "./logo.png";
import Web3 from "web3";



const App = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    loadWeb3();
  }, []);

  const loadWeb3 = () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable().then(() => {
        setAccount({ ethBalance: '0', daiBalance: '0' });
      }).catch(() => {
        alert('Please allow access to your Ethereum account.');
      });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      setAccount({ ethBalance: '0', daiBalance: '0' });
    } else {
      alert('Please install MetaMask to use this application.');
    }
  }

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          target="_blank"
          href="https://docs.aave.com/developers/getting-started/readme"
          onClick={loadWeb3}
          rel="noopener noreferrer"
        >
          AAVE Connect
        </a>
        <a className="navbar-brand col-sm-3 col-md-2 mr-0">Account:</a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 text-center">
            <div className="content mr-auto ml-auto">
              <a
                href="https://docs.aave.com/developers/getting-started/readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo" />
              </a>
              <div className="content mx-auto mt-5">
                {/* Added Ethereum Balance heading */}
                <h2>Ethereum Balance:</h2>
                <p>{account ? account.ethBalance : 'Loading...'}</p>
                {/* Added DAI Balance heading */}
                <h2>DAI Balance:</h2>
                <p>{account ? account.daiBalance : 'Loading...'}</p>
                {/* Added Borrow DAI button */}
                <button onClick={() => setAccount("Borrow DAI")}>Borrow DAI</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
