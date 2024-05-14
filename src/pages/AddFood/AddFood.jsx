import {Helmet} from "react-helmet-async";
import axios from "axios";
import {toast} from "react-toastify";
import useAuth from "@/hooks/useAuth.jsx";

const AddFood = () => {
    const {user} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.title.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const expire= form.expire.value;
        const note = form.note.value;
        const image = form.image.value;
        const donorName = form.donorName.value;
        const donorEmail = form.donorEmail.value;
        const donorAvatar = form.donorAvatar.value;

        const newFood = {name, quantity, location, expire, note, image, status: 'Available', donorName, donorEmail, donorAvatar };
        // console.log(newFood);

        axios.post('https://food-hub-api-orpin.vercel.app/foods', newFood)
            .then(() => {
                toast.success('Food added successfully!');
                form.reset();
            })
            .catch(error => toast.error(error));
    }

    return (
        <>
            <Helmet>
                <title>Food Hub | Add Food</title>
            </Helmet>
            <div className='my-12'>
                <div className='text-center mb-6'>
                    <h3 className='text-4xl font-bold font-lexend text-slate-800'>Add New Food</h3>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Food Name</span>
                            </div>
                            <input type="text" name='title' placeholder="Enter food name"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Food Quantity</span>
                            </div>
                            <input type="number" name='quantity' placeholder="Enter food quantity"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Pickup Location</span>
                            </div>
                            <input type="text" name='location' placeholder="Enter pickup location"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Expiration Date</span>
                            </div>
                            <input type="date" name='expire' placeholder="Enter expire date"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Image Link</span>
                            </div>
                            <input type="text" name='image' placeholder="Enter food image link"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Food Status</span>
                            </div>
                            <input type="text" name='status' defaultValue='Available' placeholder="Enter food status"
                                   className="w-full p-3 border outline-none rounded" disabled required/>
                        </label>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Your Name</span>
                            </div>
                            <input type="text" name='donorName' defaultValue={user?.displayName} placeholder="Enter your name"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Your Email</span>
                            </div>
                            <input type="email" name='donorEmail' defaultValue={user?.email} placeholder="Enter food quantity"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Your Avatar</span>
                            </div>
                            <input type="text" name='donorAvatar' defaultValue={user?.photoURL} placeholder="Enter profile picture link"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Additional Notes</span>
                            </div>
                            <textarea rows='5' name='note' placeholder="Enter additional notes"
                                      className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <button
                        className='w-full bg-slate-900 py-2 font-rancho text-lg text-white border-2 border-[#331A15] rounded'>
                        Donate
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddFood;
