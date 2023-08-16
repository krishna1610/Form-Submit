import React, { useState } from 'react';

const Form = () => { 
    const [name, SetName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const nameChange = (event, id) => {
        SetName(event.target.value);
    };

    // When you call a function, you pass arguments
    // When you define function, you receive arguments
    const emailChange = (event) => {
        setEmail(event.target.value); // Passing arguent
    };

    const messageChange = (event) => {
        setMessage(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "https://www.greatfrontend.com/api/questions/contact-form";
        const requestBody = {name: name, email : email, message : message};
        const reuestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        }
       fetch(url, reuestParams)
       .then((response) => { 
            return response.text();
        })
       .then((data) => {
            setSuccessMsg(data);
        });
    };

    const abc = (e) => {
        nameChange(e, "abc");
    };

    return (
            <form className='form-field' onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" name="name" placeholder='Enter Name' value={name} onChange={abc} required/>
                </label>
                <label>
                Email:
                <input type="email" name="email" placeholder='Enter email'  value={email} 
                onChange={emailChange}
                required  />
                </label>
                <label>
                Message:
                <textarea name="Message" placeholder='Enter Message' value={message} onChange={messageChange} required/>
                </label>
                <input type="submit" value="Submit" />
                {successMsg.length > 0 && <div>{successMsg}</div>}
            </form>
    );
}

export default Form;