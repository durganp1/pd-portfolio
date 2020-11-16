

import React from 'react';
import marine from '../../assets/img/marine.jpg';

function About() {

    return (
        <section className = 'aboutSection'>
            <img src = {marine} style = {{width: '10%'}}  alt = 'Marine logo' />
            <p className = 'aboutText'>
                    I have lived in the Chicago area for over 15 years with my wife
                and 2 children.  My career has focused on Hospitality and Food Service 
                Management for the past 25 years.  This has lead me through multiple 
                companies, while growing up to my most recent position as District Manger
                for the Midwest.  At this point in my career, I am looking to enter into the 
                field of web development.  It is my goal to use my prior experince combined 
                with my new found experince of coding.
                    
            </p>
        </section>
    );
}

export default About;