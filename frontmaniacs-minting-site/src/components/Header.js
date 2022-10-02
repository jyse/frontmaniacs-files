import React from "react";
import fmLogo from "../assets/fmLogo.png";
import "./Header.css";

const Header = () => {
  const categoryStyles = [
    ["explore"],
    ["collection"],
    ["resources"],
    ["artist"]
  ];
  return (
    <div className="header">
      <img src={fmLogo} alt="logo" />
      <div className="search-bar">
        <div>
          <input type="text" placeholder="Search all the NFTs" />
        </div>
        <div className="search-button">
          <p>Search</p>
        </div>
      </div>
      <div className="menu">
        {categoryStyles.map(([category, index]) => {
          return (
            <div className={`button-wrapper ${category} `}>
              <div className={`menu-button hover-${category}`}>
                <h2>{category}</h2>
              </div>
            </div>
          );
        })}
        <div className="user">
          <p>User</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
