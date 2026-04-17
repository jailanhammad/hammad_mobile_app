import React from 'react';
import './about.css';
import Header from '../components/header';

import Nav from '../components/nav';
import FilterSection from '../components/filtersection';


const Vehicles = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<FilterSection />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Vehicles;