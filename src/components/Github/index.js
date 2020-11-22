

import React, {useState} from 'react';


function GitHub() {

    const [repos] = useState([
        {
            title: 'Run Buddy',
            githubLink: 'https://github.com/durganp1/run-buddy',
            stack: 'HTML, CSS, Flexbox, CSS Grid, Media Queries',
            description: 'Class project to develop a website that offers fitness training services.'
        },
        {
            title: 'Book Search Engine',
            githubLink: 'https://github.com/durganp1/book-search-engine',
            stack: 'JavaScript, Node.js, Express.js, ApolloServer, React, GraphQL',
            description: 'Class project to develop a website that allows you to search popular books.'
        },
        {
            title: 'Deep Thoughts',
            githubLink: 'https://github.com/durganp1/deep-thoughts',
            stack: 'Node.js, ApolloServer, Bcrypt, Express.js, jwt, Moment.js, Mongoose, Mongodb, React',
            description: 'Class project to develop a website for social media posts.'
        },
        {
            title: 'Photo Port',
            githubLink: 'https://github.com/durganp1/photo-port',
            stack: 'React, gh-pages, serviceWorkers, jest, modals.',
            description: 'Class project to develop a website for displaying a photographers portfolio.'
        },
        {
            title: 'Food Festival',
            githubLink: 'https://github.com/durganp1/food-festival',
            stack: 'Bootstrap, jQuery, PWA, serviceWorkers.',
            description: 'Class project to develop a website for a food festival that can act as a PWA for offline functionality.'
        },
        {
            title: 'Petro Social Network',
            githubLink: 'https://github.com/durganp1/petro-social-network',
            stack: 'JavaScript, Node.js, MongoDB, Mongoose, Express.js, Moments',
            description: 'Class project to build the backend for a blogging app.'
        },
        {
            title: 'Just Tech News',
            githubLink: 'https://github.com/durganp1/just-tech-news',
            stack: 'Sequelize, MYSql2, Express-handlebars, dotenv, bcrypt, jest, Node.js, Heroku',
            description: 'Class project to develop a tech news blog.'
        },
        {
            title: 'E Commerce Backend',
            githubLink: 'https://github.com/durganp1/E-commerce-backend',
            stack: 'JavaScript, Node.js, Sequelize, MySql, Insomnia, ORM',
            description: 'Class project to build a backend program for an E commerce site.'
        },
        {
            title: 'Employee Tracker',
            githubLink: 'https://github.com/durganp1/Employee-Tracker',
            stack: 'JavaScript, Node.js, Asciiart, Inquirer, MySql2',
            description: 'Class project to build a CLI based tool that can be used to create and maintain a database of employees'
        },
        {
            title: 'Pizza Hunt',
            githubLink: 'https://github.com/durganp1/pizza-hunt',
            stack: 'Express, Moment, Mongoose, MongoDB, IndexDB, Heroku',
            description: 'Class project to build a Pizza App with a database to store users and pizza data.'
        },
        // {
        //     title: 'Team Profile Generator',
        //     githubLink: 'https://github.com/durganp1/team-profile-generator',
        //     stack: 'Node.js, JavaScript, Jest, Inquirer, HTML, CSS',
        //     description: 'Command Line program to generate an HTML webpage of employees.'
        // },
        {
            title: 'U Develop It',
            githubLink: 'https://github.com/durganp1/u-develop-it',
            stack: 'SQL, Node, SQLite, JavaScript, API, HTML, CSS',
            description: 'Class project to develop a backend for a voting app.'
        },
        {
            title: 'Zookeepr',
            githubLink: 'https://github.com/durganp1/zookeepr',
            stack: 'Node.js, Express, Heroku, JavaScript, HTML, CSS, Insomnia',
            description: 'Class project to create a web server for a Zoo Inventory System.'
        },
        {
            title: 'Jest Another RPG',
            githubLink: 'https://github.com/durganp1/jest-another-RPG',
            stack: 'Node.js, JavaScript, HTML, CSS, Jest, OOP, TDD',
            description: 'Class project to create a command-line RPG.'
        },
        {
            title: 'README Generator',
            githubLink: 'https://github.com/durganp1/README-generator',
            stack: 'Node.js, JavaScript, HTML, CSS, Inquirer',
            description: 'Command Line application that dynamically creates a professional quality README.'
        },
        {
            title: 'Portfolio Generator',
            githubLink: 'https://github.com/durganp1/portfolio-generator',
            stack: 'Node.js, JavaScript, HTML, CSS, Inquirer',
            description: 'Class project to develop a program that creates an HTML portfolio page.'
        },
        {
            title: 'Work Day Scheduler',
            githubLink: 'https://github.com/durganp1/work-day-scheduler',
            stack: 'JavaScript, jQuery, HTML, CSS, Third Party API,',
            description: 'A calendar app that allows users to save events for each hour of the day.'
        },
        {
            title: 'Git It Done',
            githubLink: 'https://github.com/durganp1/git-it-done',
            stack: 'JavaScript, Third Party API, HTML, CSS',
            description: 'Class project to develop an app that will search GitHub for open source projects.'
        },
        {
            title: 'Taskmaster Pro',
            githubLink: 'https://github.com/durganp1/taskmaster-pro',
            stack: 'Bootstrap, JavaScript, HTML, CSS, Third Party API, jQuery',
            description: 'Class project to rebuild and redesign a to-do list app.'
        },
        {
            title: 'Password Selector',
            githubLink: 'https://github.com/durganp1/password-selector',
            stack: 'JavaScript, HTML, CSS',
            description: 'Program to randomly generate passwords.'
        },
        {
            title: 'Taskinator',
            githubLink: 'https://github.com/durganp1/Taskinator',
            stack: 'JavaScript, Local Storage, API, HTML, CSS',
            description: 'Class project to allow you to organize your personal to-do list.'
        },
        {
            title: 'Robot Gladiators',
            githubLink: 'https://github.com/durganp1/robot-gladiators',
            stack: 'JavaScript, HTML, CSS',
            description: 'Class project to build a robot combat simulator game.'
        }
    ])

    return (
        <div>
            <ul>
                {repos.map((repo) => (
                    <li className = '' key = {repo.title} >
                        <div>
                            <span>{repo.title}</span>
                            <a href = {repo.githubLink} target = '_blank' rel = 'noreferrer'>GitHub Link</a>
                            <span>Created with: {repo.stack}</span>
                            <span>{repo.description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GitHub;