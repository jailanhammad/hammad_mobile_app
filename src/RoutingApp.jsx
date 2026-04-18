import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroll from "./Scroll";
import About from "./pages/about";
import Home from "./pages/home";
import Vehicles from "./pages/vehicles";
import Menu from "./pages/menu";


const RoutingApp = () => {

    return (
        <>
        

    <BrowserRouter>
    <Scroll />
      <Routes>

        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Menu" element={<Menu />} />

      </Routes>
    </BrowserRouter>



        
        </>
      );
}
 
export default RoutingApp;
