import React from "react";

const CompletedMinting = () => {
  const viewOpenSea = () => {
    // View your collection on Testnet OpenSea (www.testnets.opensea.io)
    const url = "";
    window.open(url, "_blank");
  };

  return (
    <div>
      <div>All set! You NFT has been minted.</div>
      <div className="button" onClick={viewOpenSea}>
        VIEW OPENSEA
      </div>
    </div>
  );
};

export default CompletedMinting;
