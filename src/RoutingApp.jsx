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
import IntroScreen from "./pages/intro";
import Discover from "./pages/discover";
import AiOnboarding from "./pages/ai";
import ArOnboarding from "./pages/ar";
import Sell from "./pages/sell";
import Reviews from "./pages/reviews";
import Services from "./pages/services";
import Installments from "./pages/installments";

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
                        <Route path="/" element={<IntroScreen />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} /> 
                        <Route path="/about" element={<About />} />
                        <Route path="/vehicles" element={<Vehicles />} />
                        <Route path="/Menu" element={<Menu />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/discover" element={<Discover />} />
                        <Route path="/ai" element={<AiOnboarding />} />
                        <Route path="/ar" element={<ArOnboarding />} />
                        <Route path="/sell" element={<Sell />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/installments" element={<Installments />} />


                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}
 
export default RoutingApp;