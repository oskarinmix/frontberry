import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: "20px",
      }}
    >
      <h3 style={{ color: "white" }}>
        Blueberry Fashion Store © {new Date().getFullYear()}
      </h3>
    </footer>
  );
};

export default Footer;
