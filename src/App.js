import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import "./index.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Products />
      <Footer />
    </React.Fragment>
  );
}

export default App;
