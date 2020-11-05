

import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';


function Contact() {

    const [formState, setFormState] = useState(
        { name: '', email: '', message: ''}
    );

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
           
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form onSubmit = {handleSubmit}>
                <div className = 'contact-div'>
                    <label htmlFor = 'name'>Name:</label>
                    <input type = 'text' onChange = {handleChange} name = 'name' defaultValue = {name} />
                </div>
                <div className = 'contact-div'>
                    <label htmlFor = 'email'>Email address:</label>
                    <input type = 'email' onChange = {handleChange} name = 'email' defaultValue = {email} />
                </div>
                <div className = 'textarea'>
                    <label className = 'message-label' htmlFor = 'message'>Message:</label>
                    <textarea name = 'message' onChange = {handleChange} rows = '5' defaultValue = {message} />
                    {errorMessage && (
                        <div>
                            <p className = 'error-text'>{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type = 'submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;