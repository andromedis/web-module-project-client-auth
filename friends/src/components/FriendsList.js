import React, { useState, useEffect } from 'react';
import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';

import Friend from './Friend';
import FriendForm from './FriendForm';

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

    const addFriend = friend => {
        const newFriend = {
            ...friend,
            id: friends[friends.length - 1].id + 1,
        }
        axiosWithAuth()
            .post('http://localhost:5000/api/friends/', newFriend)
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
            <FriendForm addFriend={addFriend}/>
            {
                friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))
            }
        </div>
    )
}