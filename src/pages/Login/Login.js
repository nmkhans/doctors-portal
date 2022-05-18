import React from 'react';
import auth from './../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

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

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data)
    };

    if (user) {
        console.log(user)
    }

    return (
        <div className="Login flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required',
                                    },
                                    pattern: {
                                        value: /[A-z0-9]+@[a-z]+\.[a-z]{1,2}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label>
                                {errors.email?.type === 'required' && <p className="font-semibold text-red-500">
                                    {errors.email.message}
                                </p>}
                                {errors.email?.type === 'pattern' && <p className="font-semibold text-red-500">
                                    {errors.email.message}
                                </p>}
                            </label>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 character or longer"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className="font-semibold text-red-500">
                                    {errors.password.message}
                                </p>}
                                {errors.password?.type === 'minLength' && <p className="font-semibold text-red-500">
                                    {errors.password.message}
                                </p>}
                            </label>
                        </div>
                        <input className="btn btn-accent w-full text-white mt-5" type="submit" value="Login" />
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;