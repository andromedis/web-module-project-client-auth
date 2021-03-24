// Library imports
import React, { useState, useEffect } from 'react';

// Utils
import axiosWithAuth from '../utils/axiosWithAuth';

// Components
import Friend from './Friend';
import FriendForm from './FriendForm';

export default function FriendsList(props) {
    // State
    const [friends, setFriends] = useState([]);

    // Side effect for initial data fetch
    useEffect(() => {
        getFriends();
    }, [])

    // Api request functions
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

    const deleteFriend = id => {
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`)
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
                    <Friend 
                        key={friend.id} 
                        friend={friend} 
                        deleteFriend={deleteFriend}
                    />
                ))
            }
        </div>
    )
}