// Library imports
import React, { useState } from 'react';

// Default values
const defaultFormValues = {
    name: '',
    age: '',
    email: '',
}

export default function FriendForm(props) {
    // State
    const [formValues, setFormValues] = useState(defaultFormValues);

    // Event handlers
    const handleChange = evt => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        const friend = {
            name: formValues.name,
            age: formValues.age,
            email: formValues.email,
        }
        props.addFriend(friend);
    }

    const clearForm = () => {
        setFormValues(defaultFormValues);
    }

    return (
        <div className='friend-form-container'>
            <h2>Add New Friend</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor='name' >Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={formValues.name}
                    onChange={handleChange}
                />

                <label htmlFor='age' >Age</label>
                <input
                    type='number'
                    name='age'
                    id='age'
                    value={formValues.age}
                    onChange={handleChange}
                />

                <label htmlFor='email' >Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={formValues.email}
                    onChange={handleChange}
                />

                <button type='submit'>Add</button>
                <button type='reset' onClick={clearForm}>Cancel</button>

            </form>
        </div>
    )
}