import React, { useState } from 'react';
import AdminAuth from './AdminAuth';
import Auth from './Auth';
import { Button } from '@mui/material';

const AuthSelector = () => {
    const [mode, setMode] = useState('User');

    let appUser = null;
    if (mode === 'User') {
        appUser = <Auth />
    } else {
        appUser = <AdminAuth />
    }
    return (
        <div>
            <div className='container position-relative'>
                {/* <label className='authlabel text-center' onClick={() => setMode(mode === "User" ? "Admin" : "User")} variant='contained' color='primary' > {mode === "User" ? "Go to Admin?" : "Go to User?"}</label> */}
                <Button variant="outlined" color="primary" onClick={() => setMode(mode === "User" ? "Admin" : "User")} className="position-absolute mx-4 top-0 end-0 "> {mode === "User" ? "Admin →" : "User →"}</Button>
            </div><br />
            {appUser}
        </div>
    );
};

export default AuthSelector;