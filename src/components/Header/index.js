

import React from 'react';
import profileHeader from '../../assets/img/profileHeader.jpg';

function Header() {

    return (
        <section>
            <img src = {profileHeader} style = {{width: '25%'}}  alt = 'cover' />
            <h1>Peter J Durgan</h1>
        </section>
    );
}

export default Header;