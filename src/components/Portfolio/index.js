

import React, {useState} from 'react';


function Portfolio() {

    const [projects] = cons = useState([
        {
            title:
            img:
            githubLink:
            deployedLink:
            stack:
            description:
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