import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import ReviewsSection from '../components/reviewspage';


const Reviews = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<ReviewsSection />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Reviews;