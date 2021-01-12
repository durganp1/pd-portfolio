

import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';


function Footer() {

    const icons = [
        {
            name: FaGithub,
            link: 'https://github.com/durganp1'
        },
        {
            name: FaLinkedin,
            link: 'https://linkedin.com/in/peter-durgan'
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
