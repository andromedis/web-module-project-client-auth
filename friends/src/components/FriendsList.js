import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Friend from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';

export default function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends();
    }, [])

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => {
                console.error(err.response);
            })
    }

    return (
        <div className='friends-list-container'>
            <h1>Friends</h1>
            {
                friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))
            }
        </div>
    )
}