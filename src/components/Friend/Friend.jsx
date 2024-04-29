import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = (Props) => {
    const {id, name, email, phone} = Props.friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show Friend Details</Link></p>
            {/* 2nd way with button*/}
            <Link to={`/friend/${id}`}><button>Show Friend Details</button></Link>

        </div>

    );
};

export default Friend;