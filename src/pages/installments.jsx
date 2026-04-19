import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import InstallmentPage from '../components/installmentpage';


const Installments = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<InstallmentPage />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Installments;