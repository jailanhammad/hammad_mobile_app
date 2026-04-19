// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";
import Preloader from "./components/preloader"; 
import Login from "./pages/login";

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
          <Login lang="en" /> 
        </div>
      )}
    </div>
  );
}

export default App;