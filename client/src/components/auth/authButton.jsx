import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return (
            <div>
                <Link to="/logout">Logout</Link>
                <Link to={{ pathname: '/admin' }}
                    >My Verses</Link>
            </div>
        );
    } else {
        return (
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
            </div>
        )
    }
};

export { AuthButton };