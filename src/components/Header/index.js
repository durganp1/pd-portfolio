

import React from 'react';
import profileHeader from '../../assets/img/profileHeader.jpg';

function Header() {

    return (
        <section className = 'left-child'>
            <img src = {profileHeader} className = 'profileImg' style = {{width: '35%'}}  alt = 'cover' />
            <h1>Peter J Durgan</h1>
        </section>
    );
}

export default Header;