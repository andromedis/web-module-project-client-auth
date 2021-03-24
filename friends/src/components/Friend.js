import React from 'react';

export default function Friend(props) {
    const { friend, editFriend, deleteFriend } = props;
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            {/* <button >Edit</button> */}
            <button onClick={() => deleteFriend(friend.id)} >Delete</button>
        </div>
    )
}