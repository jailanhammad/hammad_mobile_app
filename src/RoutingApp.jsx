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
import Settings from "./pages/settings";
import ArExperience from "./pages/arexperience";
import CarPage from "./pages/carpage";
import Scene from "./components/scene";
import SecondAr from "./pages/secondarpage";
import Mfour from "./components/mfour";
import Privacy from "./components/privacy";

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
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/ar_view" element={<ArExperience />} />
                        <Route path="/choose-car" element={<SecondAr />} />

                        <Route path="/carpage" element={<CarPage />} />
                        <Route path="/scene" element={<Scene />} />
                        <Route path="/m4" element={<Mfour />} />
                        <Route path="/privacy" element={<Privacy />} />


                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}
 
export default RoutingApp;