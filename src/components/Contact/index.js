

import React from 'react';


function Contact() {

    

    return (
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
    );
}

export default Contact;