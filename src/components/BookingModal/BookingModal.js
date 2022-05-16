import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form className="grid grid-cols-1 gap-5 justify-items-center mt-5">
                        <input type="text" name="date" defaultValue={format(date, "PP")} disabled class="input input-bordered input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text"
                        name="name" placeholder="Name" class="input input-bordered input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email" class="input input-bordered input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone" class="input input-bordered input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;