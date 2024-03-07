import { React, useEffect } from 'react';
import GoogleButton from "react-google-button"
import { useNavigate } from 'react-router-dom';
// import { useContext } from "react";
import { UserAuth } from "../context/AuthContext"
const SignIn = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (user != null) {
            navigate('/account');
        }
    }, [user])
    return (
        <div className="signing">
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
    )
}
export default SignIn;