import { useState, useId } from "react";
import './RegisterForm.css'

const INITIAL_STATE = {
        name: "",
        email: "",
        password: ""
    }

const RegisterForm = ({onSubmit}) => {

    const [state, setState] = useState({ ...INITIAL_STATE })
    
    const handleChange = ({ target }) => {
        const { name, value, type, checked } = target;
        const newValue = type === "checkbox" ? checked : value;

        setState({
            ...state,
            [name]: newValue,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        reset();
    };

    const reset = () => {
        setState({ ...INITIAL_STATE });
    }

    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const { name, email, password } = state;

    
    return (
        <div className="log-form">
            <h1 className="form-title">Please Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-div">
                <label htmlFor={nameId} className="form-label"><p className="form-p">Name</p></label>
                <input className="form-input" value={name} onChange={handleChange} name="name" id={nameId} required/>
            </div>
            <div className="form-div">
                <label htmlFor={emailId} className="form-label"><p className="form-p">Email</p></label>
                <input className="form-input" value={email} onChange={handleChange} type="email" name="email" id={emailId} required/>
            </div>
            <div className="form-div">
                <label  htmlFor={passwordId} className="form-label"><p className="form-p">Password</p></label>
                <input className="form-input" value={password} onChange={handleChange} type="password" name="password" id={passwordId} required/>
            </div>
            <button className="form-btn" type="submit">Register</button>
            </form>
        </div>
    )
}

export  default RegisterForm