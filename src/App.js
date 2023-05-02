import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
