import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Friend from './Friend';

export default function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className='friends-list-container'>
            <h1>Friends</h1>
            {
                friends.map(friend => (
                    <Friend id={friend.id} friend={friend} />
                ))
            }
        </div>
    )
}