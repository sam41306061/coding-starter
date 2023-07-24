import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 ms-3"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          AAVE DAI
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mx-auto mt-5">
              <a
                href="http://www.dappuniversity.com/bootcamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo" />
              </a>
              <div className="content mx-auto mt-5">
                {/* Added Ethereum Balance heading */}
                <h2>Ethereum Balance</h2>
                {/* Added DAI Balance heading */}
                <h2>DAI Balance</h2>
                {/* Added Borrow DAI button */}
                <button onClick={() => alert("Borrow DAI")}>Borrow DAI</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
