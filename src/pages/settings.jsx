import React from 'react';
import './home.css';
import Header from '../components/header';

import Nav from '../components/nav';
import SettingsPage from '../components/settingspage';


const Settings = () => {
    return ( 
        <>
        
<div className='home'>

<Header />

<div className='all-components'>

<SettingsPage />

</div>
 
           
<Nav />


</div>

  
        
        </>
     );
}
 
export default Settings;