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
    // Step 4: Write the mint function
    //
    // Step 7: Set the variables for progress and completed
    // setInProgress(true)
    //  await transaction.wait()
    //  setInProgress(false)
    //  setCompleted(true)
  };

  const getTotalSupply = async () => {
    // Step 3: Add totalSupply and use it from the contract
  };

  // Step 3: Contract => getTotalSupply()

  const login = async () => {
    // Step 1: Connect wallet (check Metamask + accounts)
    // Step 2: Wire up contract (provider, signer, NFTContract)
  };

  const getState = () => {
    if (inProgress) {
      // Step 8: Pass in the transaction hash to InProgressMinting Component
      return <InProgressMinting />;
    }

    if (completed) {
      return <CompletedMinting />;
    }

    // Step 6: Pass mint as props
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
              <img className="nft-image" src={nftImage} alt="image" />
            </div>
            <div className="information-header-container">
              <h4 className="information-subheader">
                1st Frontmania NFT collection:
              </h4>
              <h1 className="information-header">Frontmaniacs </h1>
              <p> 0 minted / 1000 </p>
              {/* // Step 5: insert getState() */}
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
