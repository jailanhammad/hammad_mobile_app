import React from 'react';
import './home.css';
import Header from '../components/header';
import Featured from '../components/featured';
import Explore from '../components/explore';
import Nav from '../components/nav';
import Mostsold from '../components/mostsold';
import Review from '../components/review';

const Home = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>


<Featured />
<Explore />
<Mostsold />
<Review />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Home;