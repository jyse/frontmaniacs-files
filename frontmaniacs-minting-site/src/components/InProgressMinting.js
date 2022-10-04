import React from "react";
import ReactLoading from "react-loading";

const InProgressMinting = ({ hash }) => {
  // Step 11: Check Etherscan when the NFT is in progress of being minted
  const checkEtherscan = () => {
    const url = "https://goerli.etherscan.io/tx/" + hash;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div>Your NFT is being minted. Please wait.</div>
      <ReactLoading type="bubbles" color="#fff" />
      <div className="button progress" onClick={checkEtherscan}>
        CHECK ETHERSCAN
      </div>
    </div>
  );
};

export default InProgressMinting;
