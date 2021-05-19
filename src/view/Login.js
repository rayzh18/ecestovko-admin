import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    return (
        <main className="login-page">
            <div className='contain'>
                <div className="login-part">
                    <div className="logo">
                        <span>e</span>cestovko
                    </div>
                    <input
                        className='input-text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Meno/email'
                    />
                    <input
                        className='input-text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Heslo'
                    />
                    <div
                        className='orange-button'
                        onClick={() => history.push('/dashboard')}
                    >
                        Přihlásit
                    </div>
                </div>
                <a className='forgot-password' href="#">Zabudnuté heslo</a>
            </div>
        </main>
    )
}

export default LoginPage;