import React, { useState } from 'react';
import { useAddUserMutation } from '../api/usersApi';

export default function UserForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [addUser, { isLoading, isSuccess, isError }] = useAddUserMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addUser({name, email}).unwrap();
        setEmail("");
        setName("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Form</h1>
            <input type="text" placeholder='Name' value={name} onChange={(e)=> {setName(e.target.value)}}/>
            <input type="email" placeholder='Email' value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add User"}
            </button>
            {isSuccess && <p>User added successfully!</p>}
            {isError && <p>Error adding user.</p>}
        </form>
    )
} 