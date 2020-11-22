

import React from 'react';
import About from '../About';
import Contact from '../Github';
import DeployedProjects from '../Portfolio';
import Resume from '../Resume';

const SinglePage = (page) => {

    const selectedPage = (page) => {
        switch (page) {
            case 'About Me':
                return (
                    <div>
                        <About />
                    </div>
                );

            case 'Deployed Projects':
                return (
                    <div>
                        <DeployedProjects />
                    </div>
                );

            case "GitHub Repo's":
                return (
                    <div>
                        <Contact />
                    </div>
                );

            case 'Resume':
                return (
                    <div>
                        <Resume />
                    </div>
                );

            default:
                break;
        }
    }

    return (
        <div>
            {selectedPage(page.currentSection.name)}
        </div>
    )
}

export default SinglePage;