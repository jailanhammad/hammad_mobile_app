import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import ExplorePage from '../components/explorepage';


const Explore = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<ExplorePage />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Explore;