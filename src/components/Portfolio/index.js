

import React, {useState} from 'react';
import budget_tracker from '../../assets/img/budget_tracker.jpg';
import tech_blog from '../../assets/img/tech_blog.jpg';
import note_taker from '../../assets/img/note_taker.jpg';
import weather_dashboard from '../../assets/img/weather_dashboard.jpg';
import donation_network from '../../assets/img/donation_network.jpg';
import coding_quiz from '../../assets/img/coding_quiz.jpg';


function Portfolio() {

    const [projects] = useState([
        {
            title: 'Budget Tracker PWA',
            img: budget_tracker,
            githubLink: 'https://github.com/durganp1/budget-tracker',
            deployedLink: 'https://petro-budget-tracker.herokuapp.com/',
            stack: 'JavaScript, MongoDB, MongoAtlas, Node, CSS, HTML, Express and Mongoose.',
            description: 'Budget Tracker is an installable app to help you track your deposits and withdrawls.'
        },
        {
            title: 'Tech Blog',
            img: tech_blog,
            githubLink: 'https://github.com/durganp1/petro-tech-blog',
            deployedLink: 'https://petro-tech-blog.herokuapp.com/',
            stack: 'JavaScript, Node, CSS, Bcrypt, Sequelize, MySQL, Express, Express-handlebars and Dotenv',
            description: 'Tech Blog is a website where developers can share thoughts and ideas.'
        },
        {
            title: 'Note Taker',
            img: note_taker,
            githubLink: 'https://github.com/durganp1/note-taker',
            deployedLink: 'https://note1-list.herokuapp.com/',
            stack: 'JavaScript, Node, Express, uniqued, jQuery, CSS and HTML',
            description: 'Note taker is a program to help you keep track of your to-do list.'
        },
        {
            title: 'Weather Dashboard',
            img: weather_dashboard,
            githubLink: 'https://github.com/durganp1/weather-dashboard',
            deployedLink: 'https://durganp1.github.io/weather-dashboard/',
            stack: "JavaScript, Bootstrap, CSS, API's and HTML",
            description: 'Weather Dashboard will give you the current weather as well as a 5 day forecast for any city in the U.S.'
        },
        {
            title: 'Donation Network',
            img: donation_network,
            githubLink: 'https://github.com/durganp1/Food-Donation-Network',
            deployedLink: 'https://durganp1.github.io/Food-Donation-Network/',
            stack: "JavaScript, HTML, CSS, PureCSS and API's",
            description: 'Donation Network was created to connect food service providers with local charities for food donations'
        },
        {
            title: 'Coding Quiz',
            img: coding_quiz,
            githubLink: 'https://github.com/durganp1/Coding-Quiz-Challenge',
            deployedLink: 'https://durganp1.github.io/Coding-Quiz-Challenge/',
            stack: 'JavaScript, HTML and CSS',
            description: 'Coding Quiz is a short 10 question quiz to test your basic coding knowledge.'
        }
    ])

    return (
        <div>
            <ul>
                {projects.map((project) => (
                    <li key = {project.title}>
                        <span>{project.title}</span>
                        <span>{project.githubLink}</span>
                        <span>{project.deployedLink}</span>
                        <span>{project.stack}</span>
                        <span>{project.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Portfolio;