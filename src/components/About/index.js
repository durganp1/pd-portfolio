

import React from 'react';
import marine from '../../assets/img/marine.jpg';
import couple from '../../assets/img/profileHeader.jpg';
import riley from '../../assets/img/riley.jpg';
import elle from '../../assets/img/elle.jpg';
import addison from '../../assets/img/addison.jpg';
import bumblebee from '../../assets/img/bumblebee.jpg';
import jasimine from '../../assets/img/jasimine.jpg';
// import bean from '../../assets/img/theBean.jpg';


function About() {

    return (
        <div>
            <div className = 'about-photo-div'>
                {/* <img src = {bean} alt="" className = 'bean'/> */}
                <p className = 'about-photo-title'>Web Developer</p>
            </div>
            <h2>About Me</h2>
            <section className = 'about-section'>
                <p className = 'about-text'>
                &emsp;Senior level manager with experience in project management of 
                multiple projects concurrently within a multi-state territory.  
                Recently earned MERN Full Stack Coding certificate from University 
                of Wisconsin coding bootcamp.  Acquired skills in CSS, HTML, 
                JavaScript, Node, GraphQL, and React.  I am a motivational leader 
                who emphasizes a ‘One Team’ approach to all aspects of the job 
                environment.  Focused on achieving timeline goals while remaining 
                within the financial budget by keeping my teams engaged and 
                highly productive.  I have a passion for mentoring and developing 
                members of my team to achieve their dreams.  I am excited to 
                integrate my prior leadership experience with my love of coding to 
                accomplish highly successful, user-friendly apps that impact people’s lives.
                </p>
            </section>
            <section className = 'contact-section'>
                <h1 className = 'contactTitle'>Contact Me</h1>
                    <div className = 'contact-div'>
                        <p>Phone: 224.944.3210</p>
                        <p>Email: durganp1@gmail.com
                            <br></br>
                            <a href = 'mailto:durganp1@gmail.com'>Email</a>
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
            <section className = 'about-section'>
                
                <p className = 'about-text'>
                    &emsp;I have always been drawn towards technology, from programing class in high school to rebuilding my own personal PC.  Technology and computers have always been a hobby of mine, not just what they do, but how they are able to do it.  
                </p>
                <br></br>
                <p className = 'about-text'>
                    &emsp;Early on in my career I got involved in the hospitality industry and loved the atmosphere and comradery, it is unlike any other industry that I have found.  As I grew in my career, I quickly learned that problem solving was one of those things that drives me.  While working for one of my prior companies, I was the fixer.  My VP would call me every 2-4 months and tell me of an account that was in trouble.  That would be the account that I would be at for the next couple of months.  During this time, I was able to mentor and develop the onsite teams and I realized how rewarding mentorship was, to be able to help someone achieve success is better than achieving it on your own.
                </p>
                <br></br>
                <p className = 'about-text'>
                    &emsp;I stayed in the hospitality industry for several years after that and worked in several different roles, multiple companies and locations.  During this time, no matter what company I was in, I was the helpful computer guy who would take a look at a computer or program if someone was having trouble with it (it was just fascinating to me).  Then COVID hit.
                </p>
                <br></br>
                <p className = 'about-text'>
                    &emsp;This time at home has been one of the greatest things that has happened to me.  I have been able to spend so much time with my wife and daughters, time I never had before. Then after a lot of soul searching, I made the decision to pursue something that I have always loved – technology.
                </p>
                <br></br>
                <p className = 'about-text'>
                    &emsp;Starting with the first day of coding bootcamp, I knew that I had made the right decision.  To be able to write a few lines of code and see the changes happen right in front of me was magic.  While in bootcamp, I also signed up for several other online web tutorials to increase my retention of the subject matter.  Since graduating from bootcamp I have been reviewing and coding each day.  
                </p>
                <br></br>
                <p className = 'about-text'>
                    &emsp;I love to code, and I am excited about this new chapter in my life.  One big elephant in the room is all of my prior management experience and my age.  I have been told that my resume is intimidating for an entry level position, and I get it.  I used to interview a lot of people and if someone was making a career change like this, I was cautious as well.  My hope is that if I am willing to take a chance at making this drastic of a career change at age 53, that you would be willing to take a chance on me (ABBA).
                </p>
                <br></br>
                <div>
                    {/* <img src = {marine}  alt = 'Marine logo' /> */}
                    <img src = {couple} alt="" />
                    <img src = {riley} alt="" />
                    <img src = {addison} alt="" />
                    <img src = {elle} alt="" />
                    <img src = {bumblebee} alt="" />
                    <img src = {jasimine} alt="" />
                </div>
            </section>
        </div>
    );
}

export default About;