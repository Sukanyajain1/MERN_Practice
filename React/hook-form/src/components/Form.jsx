import React, {useState} from 'react';

// STEP 1: import state to be able to use it with functional components

const Form = props => {
    
    // create a state variable for each input that will store the information inside each input.
    let [firstName, setFirstName] = useState ("");
    let [lastName, setLastName] = useState ("");
    let [email, setEmail] = useState ("");
    let [password, setPassword] = useState ("");
    let [confirmPassword, setConfirmPassword] = useState ("");


    return(
        <>
            <form>
                <div className = 'form-group'>
                    <label htmlFor = ""> First Name: </label>
                    <input type = "text" onChange = {(e) => setFirstName(e.target.value)} className = "form-control" />
                </div>
                <div className = 'form-group'>
                    <label className = "mt-3" htmlFor = ""> Last Name: </label>
                    <input type = "text" onChange = {(e) => setLastName(e.target.value)} className = "form-control" />
                </div>
                <div className = 'form-group'>
                    <label className = "mt-3" htmlFor = ""> Email: </label>
                    <input type = "email" onChange = {(e) => setEmail(e.target.value)} className = "form-control" />
                </div>
                <div className = 'form-group'>
                    <label className = "mt-3" htmlFor = ""> Password: </label>
                    <input type = "password" onChange = {(e) => setPassword(e.target.value)} className = "form-control" />
                </div>
                <div className = 'form-group'>
                    <label className = "mt-3" htmlFor = ""> Confirm Password: </label>
                    <input type = "password" onChange = {(e) => setConfirmPassword(e.target.value)} className = "form-control" />
                </div>
                <input className = "btn btn-primary mt-3" type="submit" value="Submit" />
            </form>
            <hr/>
            <h2>Your Form Data:</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </>
    );
}


export default Form;