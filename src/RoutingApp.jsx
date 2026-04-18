import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroll from "./Scroll";
import About from "./pages/about";
import Home from "./pages/home";
import Vehicles from "./pages/vehicles";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Explore from './pages/explore';
import Profile from "./pages/profile";


const RoutingApp = () => {

    return (
        <>
        

    <BrowserRouter>
    <Scroll />
      <Routes>

        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>



        
        </>
      );
}
 
export default RoutingApp;
