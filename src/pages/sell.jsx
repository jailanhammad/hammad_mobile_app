import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import SellCar from '../components/sellcar';


const Sell = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<SellCar />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Sell;