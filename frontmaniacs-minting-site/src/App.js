import { useState } from "react";
import "./App.css";
import StartMinting from "./components/StartMinting";
import InProgressMinting from "./components/InProgressMinting";
import CompletedMinting from "./components/CompletedMinting";
import Header from "./components/Header";
import bgVideo from "./assets/backgroundVideo.mp4";
import nftImage from "./assets/NFTImage.png";

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [supply, setSupply] = useState(0);
  const [hash, setHash] = useState();

  const mint = async () => {
    // Create payload with value of ethers
    // Create transaction with safeMint() of contract
    /*{ Build Loader functionality
     setInProgress(true)
     await transaction.wait()
     setInProgress(false)
     setCompleted(true) */
  };

  const getTotalSupply = async () => {
    // Get totalSupply() from contract
    // Convert the Big Number
    // Set totalSupply
  };

  const login = async () => {
    // Connect wallet
    // Get account
    // Wire up contract and set the contract
    // Contract => getTotalSupply()
  };

  const getState = () => {
    if (inProgress) {
      // Pass hash as props
      return <InProgressMinting />;
    }

    if (completed) {
      return <CompletedMinting />;
    }

    // Pass mint as props
    return <StartMinting />;
  };

  return (
    <div className="pp">
      <Header />
      <div className="hero">
        <video className="bg-video" loop autoPlay muted>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="card">
          <div className="main">
            <div className="nft-section">
              <img className="nft-image" src={nftImage} />
            </div>
            <div className="information">
              <h2>1st Frontmania NFT collection: Frontmaniacs</h2>
              <p> 0 minted / 200 </p>
              <div className="button">Connect Wallet</div>
            </div>
          </div>
          <div className="footer">
            <h2>Mint a NFT from FRONTMANIACS now!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
