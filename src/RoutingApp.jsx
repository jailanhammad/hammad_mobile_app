// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Scroll from "./Scroll";
// import About from "./pages/about";
// import Home from "./pages/home";
// import Vehicles from "./pages/vehicles";
// import Menu from "./pages/menu";
// import Contact from "./pages/contact";
// import Explore from './pages/explore';
// import Profile from "./pages/profile";
// import Login from "./pages/login";


// const RoutingApp = () => {

//     return (
//         <>
        

//     <BrowserRouter>
//     <Scroll />
//       <Routes>

//         <Route path="/" element={<Home />} /> 
//         <Route path="/about" element={<About />} />
//         <Route path="/vehicles" element={<Vehicles />} />
//         <Route path="/Menu" element={<Menu />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/profile" element={<Profile />} />

//         <Route path="/login" element={<Login />} />


//       </Routes>
//     </BrowserRouter>



        
//         </>
//       );
// }
 
// export default RoutingApp;


import React, { useState } from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroll from "./Scroll";
import About from "./pages/about";
import Home from "./pages/home";
import Vehicles from "./pages/vehicles";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Explore from './pages/explore';
import Profile from "./pages/profile";
import Login from "./pages/login";
import Preloader from "./components/preloader"; 

const RoutingApp = () => {
    const [loading, setLoading] = useState(true);

    const handlePreloaderFinish = () => {
        setLoading(false);
    };

    return (
        <>
            {loading ? (
                <Preloader onFinish={handlePreloaderFinish} />
            ) : (
                <BrowserRouter>
                    <Scroll />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} /> 
                        <Route path="/about" element={<About />} />
                        <Route path="/vehicles" element={<Vehicles />} />
                        <Route path="/Menu" element={<Menu />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}
 
export default RoutingApp;