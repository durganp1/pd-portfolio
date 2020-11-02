

import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
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

            case 'Portfolio':
                return (
                    <div>
                        <Portfolio />
                    </div>
                );

            case 'Contact':
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