import React from "react";
 // eslint-disable-next-line
import data from "../data/data";
import logo from "../images/logo.png";
const Products = () => {
  console.log(data);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "100px",
        padding: "0px 100px",
      }}
    >
      {data.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            <div
              style={{
                width: "23%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                margin: "10px",
              }}
            >
              <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>
                {item.title}
              </h1>
              <img
                src={item.images[0]}
                alt={item.title.replace(
                  "EmmaCloth-Women Fast Fashion Online",
                  " "
                )}
                style={{ width: "100%" }}
              />
              <img
                src={logo}
                alt={item.title}
                style={{
                  right: "10px",
                  position: "absolute",
                  bottom: "15px",
                  width: "60%",
                }}
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Products;
