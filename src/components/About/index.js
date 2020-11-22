

import React from 'react';
import marine from '../../assets/img/marine.jpg';
import couple from '../../assets/img/profileHeader.jpg';
import riley from '../../assets/img/riley.jpg';
import elle from '../../assets/img/elle.jpg';
import addison from '../../assets/img/addison.jpg';
import bumblebee from '../../assets/img/bumblebee.jpg';
import jasimine from '../../assets/img/jasimine.jpg';

function About() {

    return (
        <div>
            <section>
                <p>
                Senior level manager with experience in project management of multiple projects concurrently within a multi-state territory.  Recently earned MERN Full Stack Coding certificate from University of Wisconsin coding bootcamp.  Acquired skills in CSS, HTML, JavaScript, Node, GraphQL, and React.  I am a motivational leader who emphasizes a ‘One Team’ approach to all aspects of the job environment.  Focused on achieving timeline goals while remaining within the financial budget by keeping my teams engaged and highly productive.  I have a passion for mentoring and developing members of my team to achieve their dreams.  I am excited to integrate my prior leadership experience with my love of coding to accomplish highly successful, user-friendly apps that impact people’s lives.

                </p>
            </section>
            <section>
                <h1 className = 'contactTitle'>Contact Me</h1>
                    <div className = 'contact-div'>
                        <p>Phone: 224.944.3210</p>
                        <p>Email: durganp1@gmail.com
                            <br></br>
                            <a href = 'mailto:durganp1@gmail.com'>Send Email</a>
                        </p>
                        <p>
                            <a href = 'www.linkedin.com/in/peter-durgan' target = '_blank' rel = 'noreferrer' >LinkedIn</a>
                            <br></br>
                        </p>
                        <p>
                            <a href = 'https://github.com/durganp1' target = '_blank' rel = 'noreferrer' >GitHub</a>
                            <br></br>
                        </p>
                    </div>
            </section>
            <section className = 'aboutSection'>
                
                <p className = 'aboutText'>
                        I have lived in the Chicago area for over 15 years with my wife
                    and 2 children.  My career has focused on Hospitality and Food Service 
                    Management for the past 25 years.  This has lead me through multiple 
                    companies, while growing up to my most recent position as District Manger
                    for the Midwest.  At this point in my career, I am looking to enter into the 
                    field of web development.  It is my goal to use my prior experince combined 
                    with my new found experince of coding.  
                </p>
                <img src = {marine} style = {{width: '10%'}}  alt = 'Marine logo' />
                <img src = {couple} style = {{width: '35%'}} alt="" />
                <img src = {riley} style = {{width: '35%'}} alt="" />
                <img src = {addison} style = {{width: '35%'}} alt="" />
                <img src = {elle} style = {{width: '35%'}} alt="" />
                <img src = {bumblebee} style = {{width: '35%'}} alt="" />
                <img src = {jasimine} style = {{width: '35%'}} alt="" />
            </section>
        </div>
    );
}

export default About;