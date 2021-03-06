import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button } from '@mui/material';


const MakeAdmin = () => {
    const[email, setEmail] = useState('');
    const[adminSuccess, setAdminSuccess] = useState(false);

    const handleOnBlur= e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e=>{
        const user = {email}
        fetch('https://thawing-beach-65606.herokuapp.com/users/admin',{
            method: "PUT",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data);
                setAdminSuccess(true);
            }
        })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit} >
            <TextField 
            sx={{width: '50%'}}
            label="Email" 
            type="email"
            onBlur={handleOnBlur}
            variant="standard" 
            />
            <Button type="submit" variant="contained" >Make Admin</Button>
            </form>
            {adminSuccess && <Alert severity="success">Make Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;