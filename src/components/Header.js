import React from "react";
import logo from "../images/logo-header.png";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "25px 100px 0px 100px",
        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",
        backgroundColor: "black",
        boxShadow: "5px 5px 5px rgba(58,88,157,0.7)",
      }}
    >
      <header
        style={{
          display: "flex",
          padding: "25px 100px",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px 10px 0 0 ",
          width: "100%",
          backgroundColor: "white",
          marginTop: "10px",
        }}
      >
        <img src={logo} alt="Blueberry Fashion Store" height="100" />
        <h1> Catálogo de Prendas</h1>
      </header>
    </div>
  );
};

export default Header;
