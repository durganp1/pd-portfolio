

import React, {useState} from 'react';

function Resume() {

    const [experience] = useState ([
        {
            company: 'Flik – Compass Group',
            dates: 'Aug 2018 – Feb 2020',
            title: 'District Manager',
            description: `Oversight of 7 Accounts, 28 Managers & $17.5 Million in Revenue
                            Responsibilities include Project Management, Forecasting, 
                            P&L Oversight, Budgets, Request for Proposal, Client Relationships, 
                            Customer Service & Platinum Service Standards, Internal Auditing, 
                            Training and Mentoring of Managers, Interviewing and Hiring, 
                            District support and training for all Flik standards.`
        },
        {
            company: 'Sodexo',
            dates: 'Jan 2017 – Aug 2018',
            title: 'General Manager',
            description: `Direct Oversight of A J Gallagher Corporate Headquarters. Direct 
                            reports of 2 Managers, 3 Supervisors and 19 staff. Responsibilities 
                            include Forecasting, Budgets, Client Relationships, Training and 
                            Mentoring of Managers, Interviewing and Hiring, District support 
                            and training for all Sodexo standards. Meeting Planning & Catering 
                            for large in-house groups.`
        },
        {
            company: 'ARAMARK',
            dates: 'Aug 2007 – Dec 2016',
            title: 'Multi-Site General Manager',
            description: `Direct Oversight of SHC Corporate Headquarters in Hoffman Estates 
                            plus 3 operations in Rockford. Direct reports of 5 Managers, 
                            3 Supervisors and 80 staff. Responsibilities include Project Management, 
                            Forecasting, Budgets, Client Relationships, Training and Mentoring 
                            of Managers, Interviewing and Hiring, District support and training 
                            for all ARAMARK standards, Support for new account openings. Meeting 
                            Planning & Catering for large in-house groups. Regional Safety Leader 
                            for Central Region Business Dinning.`
        },
        {
            company: 'The Cheesecake Factory Incorporated',
            dates: 'Nov 1999 – Aug 2007',
            title: 'Senior Manager',
            description: `Redondo Beach, California; Beverly Hills, California; Mission Viejo, California; 
                            Lincolnshire, Illinois. Direct reports of 2 Managers and 100 staff. 
                            Responsibilities include Guest Relations, Training and Supervision of 
                            all staff, Interviewing and Hiring, Quality Assurance of food and systems, 
                            Facilities Maintenance, Purchasing, Inventory, Loss Control and Scheduling.`
        },
        {
            company: 'United Lending Group – Irvine, California',
            dates: 'Feb 1998 – Aug 1999',
            title: 'Home Mortgage Loan Officer',
            description: `Responsible for Sales and Processing of Home Loans for nationwide client base.`
        },
        {
            company: 'Twin Palms Restaurant – Newport Beach, California',
            dates: 'Nov. 1995 – Feb 1998',
            title: 'Lead Bartender',
            description: `Responsible for Inventory Control & Guest Service`
        },
        {
            company: 'Ritz-Carlton Hotel Company – Dana Point, California',
            dates: 'Sept 1991 – Oct 1995',
            title: 'Assistant Manager of the Terrace Restaurant',
            description: `Responsibilities included Guest Relations, Training and Supervision of all 
                            staff, Quality Assurance, Facilities Maintenance, Purchasing, Inventory, 
                            Loss Control and Scheduling.`
        },
        {
            company: 'United States Department of State',
            dates: 'Jan 1991 – Aug 1991',
            title: 'Special Operations Unit',
            description: `Responsible for security of Main State building and all annexes. Diplomatic 
            Security for Foreign Dignitaries.`
        },
        {
            company: 'United States Marine Corps',
            dates: 'Oct 1986 - Oct 1990',
            title: 'Presidential Security – Marine One',
            description: `Security for Presidential Helicopter Squadron One.  Extensive Travel in country 
                            and abroad with White House Detail.  Responsible for security of all aircraft, 
                            personnel and equipment.`
        }
    ])

    return (
       <section>
           <h2>Resume</h2>
           <a href='https://docs.google.com/document/d/1Azep51R4qDNSCxhpUptjGg2R9crCSWqvMpr13Lrqf5I/edit?usp=sharing' target='_blank' rel='noreferrer' class='resume'>Resume Doc</a>
           <div className = 'resume-head'>
           <h1>Peter J. Durgan</h1>
           <h3>Round Lake Beach, Illinois  60073</h3>
            <h3>Home 847-548-0775 {' '} Cell 224-944-3210</h3>
            <h3>durganp1@gmail.com</h3>
            
            </div>
            <div className = 'job-div'>
                <ul>
                    {experience.map((job) => (
                        <li className = 'job' key = {job.company}>
                            <div className = 'company-wrapper'>
                            <span className = 'company-name'>{job.company}</span>
                            <span className = 'job-dates'>{job.dates}</span>
                            </div>
                            
                            <span className = 'job-title'>{job.title}</span>
                            <br></br>
                            <span className = 'job-desc'>{job.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className = 'skills-div'>
                <h3>Technical Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySql</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                    <li>Responsive Design</li>
                    <li>API's</li>
                    <li>REST</li>
                </ul>
            </div>
            <div className = 'skills-div'>
                <h3>Skills / Honors</h3>
                <ul>
                    <li>ALDP - Advanced Leadership Development Program - Aramark</li>
                    <li>Servesafe Certified</li>
                    <li>OSHA Certified</li>
                    <li>Certified Cheesecake Factory Mentor for Managers</li>
                    <li>Graduated Marine Corps Military Police School</li>
                    <li>Top Secret Security Clearance from White House and State Department</li>
                    <li>State Department Special Operations Unit</li>
                    <li>Recipient of Presidential Security Badge</li>
                </ul>
            </div>
       </section>
    );
}

export default Resume;
