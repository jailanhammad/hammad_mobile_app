import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import ContactUs from '../components/contactus';


const Contact = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<ContactUs />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Contact;