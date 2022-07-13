import React, { useState } from 'react';
import AdminAuth from './AdminAuth';
import Auth from './Auth';

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
            {appUser}
            <div className='text-center mt-3'>
                <label className='authlabel text-center' onClick={() => setMode(mode === "User" ? "Admin" : "User")} variant='contained' color='primary' > {mode === "User" ? "Go to Admin?" : "Go to User?"}</label>
            </div>
        </div>
    );
};

export default AuthSelector;