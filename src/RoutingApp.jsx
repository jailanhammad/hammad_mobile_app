import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroll from "./Scroll";
import About from "./pages/about";
import Home from "./pages/home";


const RoutingApp = () => {

    return (
        <>
        

    <BrowserRouter>
    <Scroll />
      <Routes>

        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />

      </Routes>
    </BrowserRouter>



        
        </>
      );
}
 
export default RoutingApp;
