

import React, {useEffect} from 'react';

function Header(props) {

    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props;

    useEffect(() => {
        document.title = (currentSection.name)
    }, [currentSection]);

    return (
        <header className = 'header'>
            <h1>Peter J Durgan</h1>
            <nav>
                <ul>
                    {sections.map((page) => (
                        <li className = 'nav-li' key = {page.name} style = {{cursor: "grabbing"}}>
                            <span onClick = {() => {setCurrentSection(page)}}>
                                {page.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;