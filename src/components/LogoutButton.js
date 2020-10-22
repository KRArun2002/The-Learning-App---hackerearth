import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'reactstrap';


const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <Button className= "btn btn-outline-success mr-2" onClick={() => logout()}>
            <span className="fa fa-sign-in fa-lg"> LogOut </span>
        </Button>
        )
    )
}

export default LogoutButton 