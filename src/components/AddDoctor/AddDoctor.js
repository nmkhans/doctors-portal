/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: appointment, isLoading } = useQuery('appoint', () => (
        fetch('http://localhost:5000/appointment')
            .then(res => res.json())
    ));
    const imgAPI = "4ef6064f92cecc9354940bb42dad244d";

    const onSubmit = async data => {
    const img = data.image[0];
    const formData = new FormData();
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?key=${imgAPI}`;
    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        if(result.success) {
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                speciality: data.specialization,
                img: img
            }
            console.log(doctor)
        }
    })
    };

    return (
        <div>
            <h3 className='text-2xl my-5'>Add Doctor</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs mx-auto">
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
                        <span className="label-text">Specialization</span>
                    </label>
                    <select
                        class="select select-bordered w-full max-w-xs"
                        {...register('specialization', {
                            required: {
                                value: true,
                                message: "Field is requires"
                            }
                        })}
                    >
                        {
                            appointment.map(appoint => (
                                <option key={appoint._id} value={appoint.name}>
                                    {appoint.name}
                                </option>
                            ))
                        }
                    </select>
                    <label>
                        {errors.special?.type === 'required' && <p className="font-semibold text-red-500">
                            {errors.special.message}
                        </p>}
                    </label>
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required',
                            }
                        })}
                    />
                    <label>
                        {errors.image?.type === 'required' && <p className="font-semibold text-red-500">
                            {errors.image.message}
                        </p>}
                    </label>

                    <input className="btn btn-accent w-full max-w-xs mx-auto text-white mt-5" type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;