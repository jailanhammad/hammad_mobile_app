import React from 'react';
import './about.css';
import logo from "../assets/home/logo-big.svg";
import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <>
        <div className='about'>

        <img src={logo} alt="" />
        
        <Link to="/">
        
        <button>
            back
        </button>
        
        </Link>
   

        </div>
  
        
        
        
        </>
     );
}
 
export default About;