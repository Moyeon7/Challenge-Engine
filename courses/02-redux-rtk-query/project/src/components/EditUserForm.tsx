import React, { useState } from 'react';
import { useUpdateUserMutation } from '../api/usersApi';

type Props = {
    user: {
        id: number; 
        name: string;
        email: string;
    }
}

export default function EditUserForm({user}: Props){
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [updateUser, { isLoading, isSuccess, isError }] = useUpdateUserMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateUser({id: user.id, name, email}).unwrap();
        setEmail("");
        setName("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Edit Form</h1>
            <input type="text" placeholder='Name' value={name} onChange={(e)=> {setName(e.target.value)}}/>
            <input type="email" placeholder='Email' value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update User"}
            </button>
            {isSuccess && <p>User updated successfully!</p>}
            {isError && <p>Error updating user.</p>}
        </form>
    )
} 