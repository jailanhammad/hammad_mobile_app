import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import CarDetails from '../components/cardetails';


const CarPage = () => {
    return ( 
        <>
        
<div className='home'>

<Header />


<CarDetails />

 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default CarPage;