import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingpPage";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <SecondPage/>
      <Footer/>
    </div>
  );
}

export default App;
