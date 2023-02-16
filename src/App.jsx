import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
