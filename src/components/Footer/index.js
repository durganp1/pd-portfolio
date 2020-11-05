

import React from 'react';
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';


function Footer() {

    const icons = [
        {
            name: FaGithub,
            link: 'https://github.com/durganp1'
        },
        {
            name: FaLinkedin,
            link: 'https://linkedin.com/in/peter-durgan'
        },
        {
            name: FaFacebook,
            link: 'https://www.facebook.com/peter.durgan.5'
        }
    ]

    return (
        <footer className = 'footer-icons'>
            {icons.map(icon => (
                <a href = {icon.link} key = {icon.name} target = '_blank' rel = 'noreferrer'><icon.name /></a>
            ))}
        </footer>
    );
}

export default Footer;
