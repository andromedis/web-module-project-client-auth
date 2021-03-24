import React from 'react';

export default function Friend(props) {
    const { name, age, email } = props.friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
}