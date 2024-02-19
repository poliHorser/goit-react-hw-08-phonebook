import React, { useState } from 'react';
import './createForm.css'

const Form = ({createContact}) => {

    const [formInput, setFormInput] = useState(
     { name: '',
       number: ''  }
    )
   
   
    const handleChange = ({ target: { value, name } }) => {
       setFormInput((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
       
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        createContact(formInput)
        setFormInput({
            name: " ",
            number: " "
        })
    }
    const { name, number } = formInput
    
        return (
            <form className='form' onSubmit={handleSubmit}>
            <div>
                <h2 className='title'>Name</h2>
                <input className='input'
                       type="text"
                       name="name"   
                       value={name}
                       onChange={handleChange}
                    required />
                <label htmlFor=''></label>
            </div>
            <div>
                <h2 className='title'>Number</h2>
                <input className='input'
                       type="tel"
                       name="number"   
                       value={number}
                       onChange={handleChange}
                    required />
                <label htmlFor=''></label>
            </div>
             <button className='btn'>
                    <p> Add to contact list</p>
                </button>
            </form>
        )
    }

export default Form