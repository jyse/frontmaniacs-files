import React from "react";

const StartMinting = ({ mint }) => {
  return (
    <div className="mintStart">
      <div onClick={mint} className="button mint">
        START MINTING
      </div>
    </div>
  );
};

export default StartMinting;
