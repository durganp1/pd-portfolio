

import React, {useEffect} from 'react';

function Nav(props) {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;

    useEffect(() => {
        document.title = (currentSection.name)
    }, [currentSection]);

    return (
        <nav>
            <ul>
                {sections.map((page) => (
                    <li className = 'left-child' key = {page.name}>
                        <span onClick = {() => {setCurrentSection(page)}}>
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
