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

  const mint = async () => {};

  const getTotalSupply = async () => {};

  const login = async () => {};

  const getState = () => {
    if (inProgress) {
      return <InProgressMinting />;
    }

    if (completed) {
      return <CompletedMinting />;
    }

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
