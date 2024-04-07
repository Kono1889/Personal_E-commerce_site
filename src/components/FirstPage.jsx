import React from "react";
import Header from "./Header";
import LandingPage from "./LandingpPage";
import SecondPage from "./SecondPage";
import Footer from "./Footer";

const FirstPage = ()=> {
    return (
      <div className="App">
        <Header/>
        <LandingPage/>
        <SecondPage/>
        <Footer/>
      </div>
    );
  }
  
  export default FirstPage;