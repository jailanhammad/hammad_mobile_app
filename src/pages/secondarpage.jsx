import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import ArCars from '../components/arcarspage';


const SecondAr = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<ArCars />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default SecondAr;