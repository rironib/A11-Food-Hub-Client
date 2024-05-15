import {useState} from 'react';
import {Button} from "@/components/ui/button.jsx";
import useAuth from "@/hooks/useAuth.jsx";
import useTimestamp from "@/hooks/useTimestamp.jsx";
import axios from "axios";
import {toast} from "react-toastify";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const Modal = ({food}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleRequest = () => {
        setIsOpen(!isOpen);
    }

    const navigate = useNavigate();

    const {user} = useAuth();
    const {_id, name, quantity, location, expire, image, donorEmail, donorName} = food;
    const {timestamp} = useTimestamp();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const note = form.note.value;

        const newRequest = {id: _id, name, image, donorName, donorEmail, quantity, userEmail : user.email, reqDate : timestamp, location, expire, note};

        axios.post('https://food-hub-api-orpin.vercel.app/requests', newRequest)
            .then(() => {
                axios.patch(`https://food-hub-api-orpin.vercel.app/status/${_id}`, {status: 'Requested'})
                    .then(() => {
                        navigate('/request');
                        toast.success('Food Request Successful!');
                    })
                    .catch(error => toast.error(error));
            })
            .catch(error => toast.error(error));
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Button onClick={handleRequest} disabled={food.status !== 'Available' && 'disabled'}>Request</Button>
            {isOpen && (
                <div className='fixed z-20 inset-0 bg-slate-900 bg-opacity-70 flex flex-col items-center justify-center overflow-y-auto p-2'>
                    <div className='lg:w-3/5 bg-white p-4 sm:p-8 lg:px-12 rounded-xl'>
                        <h2 className='font-bold font-lexend text-3xl text-center mb-4'>Request</h2>
                        <form onSubmit={handleSubmit} className='grid gap-2'>
                            <div className='grid grid-cols-2 gap-2'>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Food Name</span>
                                    <input type="text" name='name' className="w-full p-3 border rounded-lg outline-none"
                                           defaultValue={name} placeholder="Food Name" disabled/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Photo</span>
                                    <input type="text" name='image'
                                           className="w-full p-3 border rounded-lg outline-none" defaultValue={image}
                                           placeholder="Food Photo" disabled/>
                                </label>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Food ID</span>
                                    <input type="text" name='id' className="w-full p-3 border rounded-lg outline-none"
                                           defaultValue={_id} placeholder="Food ID" disabled/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Expire Date</span>
                                    <input type="text" name='expire'
                                           className="w-full p-3 border rounded-lg outline-none" defaultValue={expire}
                                           placeholder="Expire Date" disabled/>
                                </label>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Donor Name</span>
                                    <input type="text" name='donarName'
                                           className="w-full p-3 border rounded-lg outline-none"
                                           defaultValue={donorName} placeholder="Donor Name" disabled/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Donor Email</span>
                                    <input type="text" name='donorEmail'
                                           className="w-full p-3 border rounded-lg outline-none"
                                           defaultValue={donorEmail} placeholder="Donor Email" disabled/>
                                </label>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Your Email</span>
                                    <input type="text" name='userEmail'
                                           className="w-full p-3 border rounded-lg outline-none"
                                           defaultValue={user?.email} placeholder="Your Email" disabled/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Request Date</span>
                                    <input type="text" name='reqDate'
                                           className="w-full p-3 border rounded-lg outline-none"
                                           defaultValue={timestamp} placeholder="Request Date" disabled/>
                                </label>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Pickup Location</span>
                                    <input type="text" name='location'
                                           className="w-full p-3 border rounded-lg outline-none" defaultValue={location}
                                           placeholder="Pickup Location" disabled/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className='text-slate-800 font-semibold text-lg'>Additional Notes</span>
                                    <input type="text" name='note' className="w-full p-3 border rounded-lg outline-none"
                                           placeholder="Write some notes" required/>
                                </label>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <button onClick={handleClose} className='bg-red-600 text-white mt-4 p-3 rounded-xl'>Close</button>
                                <button className='bg-slate-900 text-white mt-4 p-3 rounded-xl'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

Modal.propTypes = {
    food: PropTypes.object.isRequired
}

export default Modal;
