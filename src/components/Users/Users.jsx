import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users=useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>this is user page</h1>
            <div>
              
            </div>
        </div>
    );
};

export default Users;