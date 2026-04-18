import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import ProfilePage from '../components/profilepage';


const Profile = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<ProfilePage />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Profile;