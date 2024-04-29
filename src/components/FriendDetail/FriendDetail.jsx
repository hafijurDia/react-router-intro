import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    //react router hook element
    const friend = useLoaderData();
    //react router hook element
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Name: {friend.name}</h2>
            <h2>Email: {friend.email}</h2>
            <h2>Phone: {friend.phone}</h2>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    );
};

export default FriendDetail;