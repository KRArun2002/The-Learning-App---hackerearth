import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <Button className= "btn btn-outline-success mr-2" onClick={() => loginWithRedirect()}>
        <span className="fa fa-sign-in fa-lg"> LogIn </span>
        </Button>
    )
    )
}

export default LoginButton 