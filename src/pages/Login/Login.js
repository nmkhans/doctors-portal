import React from 'react';
import auth from './../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }

    return (
        <div className="Login flex justify-center items-center h-screen">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title justify-center">Login</h2>
                    <div class="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;