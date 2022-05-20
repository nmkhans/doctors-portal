/* eslint-disable no-unused-vars */
import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { name, slots, _id } = treatment;
    const formatedDate = format(date, "PP");

    const handleAppointment = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;
        
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: phone,
        }
        console.log(booking)

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast.success(`Appointment booked on ${formatedDate} at ${slot}`)
                setTreatment(null);
            } else {
                toast.error(`You Already have an appointment on ${data?.booking?.date} at ${data?.booking?.slot}`)
                setTreatment(null);
            }
        })
        
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleAppointment} className="grid grid-cols-1 gap-5 justify-items-center mt-5">
                        <input type="text" defaultValue={format(date, "PP")} disabled className="input input-bordered input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text"
                        name="name" disabled defaultValue={user?.displayName} className="input input-bordered input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled defaultValue={user?.email} className="input input-bordered input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;