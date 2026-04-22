
import React, { useState } from "react";
import "@google/model-viewer";
import "./App.css";
import Preloader from "./components/preloader"; 
import IntroScreen from "./pages/intro";

function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <div className="content-fade-in">
          <IntroScreen lang="en" /> 
        </div>
      )}
    </div>
  );
}

export default App;