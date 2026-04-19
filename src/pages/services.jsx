import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import ServicesPage from '../components/servicespage';


const Services = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<ServicesPage />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Services;