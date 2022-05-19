/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        googleuser,
        googleloading,
        googleerror
    ] = useSignInWithGoogle(auth);

    if (loading || googleloading || updating) {
        return <p>Loading</p>
    }

    let errorMessage;
    if (error || googleerror) {
        errorMessage = <p className="text-red-500 text-center">{error?.message || googleerror?.message}</p>
    }

    if (user || googleuser) {
        navigate(from, { replace: true });
    }

    const handleGoogleLogin = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }

    const onSubmit = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    };

    return (
        <div className="Register flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    }
                                })}
                            />
                            <label>
                                {errors.name?.type === 'required' && <p className="font-semibold text-red-500">
                                    {errors.name.message}
                                </p>}
                            </label>
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
                        {errorMessage}
                        <input className="btn btn-accent w-full text-white mt-5" type="submit" value="Register" />
                    </form>
                    <p className="text-center text-sm m-3">Already have account? <Link className="text-primary" to="/login">Login</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;