import React from "react";
import FirstPage from "./components/FirstPage";
import CartPage from "./components/CartPage"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route path="/Cart" element={<CartPage />} />

      </Routes>
    </Router>

  );
}

export default App;
