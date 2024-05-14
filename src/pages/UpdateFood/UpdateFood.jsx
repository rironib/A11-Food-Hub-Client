import {Helmet} from "react-helmet-async";
import axios from "axios";
import {toast} from "react-toastify";
import {useLoaderData} from "react-router-dom";

const UpdateFood = () => {
    const food = useLoaderData();

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

        const updateFood = {name, quantity, location, expire, note, image, status: 'Available', donorName, donorEmail, donorAvatar };
        // console.log(newFood);

        axios.patch(`https://food-hub-api-orpin.vercel.app/foods/${food._id}`, updateFood)
            .then((res) => {
                console.log(res.data);

                if(res.data.modifiedCount  > 0) {
                    toast.success('Food updated successfully!');
                } else {
                    toast.error(res.data.error.message);
                }
            })
            .catch(error => toast.error(error));
    }

    return (
        <>
            <Helmet>
                <title>Food Hub | {food.name ? food.name : 'Update Food'}</title>
            </Helmet>
            <div className='my-12'>
                <div className='text-center mb-6'>
                    <h3 className='text-4xl font-bold font-lexend text-slate-800'>Update Food</h3>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Food Name</span>
                            </div>
                            <input type="text" name='title' defaultValue={food?.name} placeholder="Enter food name"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Food Quantity</span>
                            </div>
                            <input type="number" name='quantity' defaultValue={food?.quantity} placeholder="Enter food quantity"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Pickup Location</span>
                            </div>
                            <input type="text" name='location' defaultValue={food?.location} placeholder="Enter pickup location"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Expiration Date</span>
                            </div>
                            <input type="date" name='expire' defaultValue={food?.expire} placeholder="Enter expire date"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Image Link</span>
                            </div>
                            <input type="text" name='image' defaultValue={food?.image} placeholder="Enter food image link"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Food Status</span>
                            </div>
                            <select name='status' className="w-full p-3 border outline-none rounded" required>
                                <option value='Available'>Available</option>
                                <option value="Unavailable">Requested</option>
                            </select>
                        </label>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Your Name</span>
                            </div>
                            <input type="text" name='donorName' defaultValue={food?.donorName} placeholder="Enter your name"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Your Email</span>
                            </div>
                            <input type="email" name='donorEmail' defaultValue={food?.donorEmail} placeholder="Enter food quantity"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Your Avatar</span>
                            </div>
                            <input type="text" name='donorAvatar' defaultValue={food?.donorAvatar} placeholder="Enter profile picture link"
                                   className="w-full p-3 border outline-none rounded" required/>
                        </label>
                    </div>
                    <div className='grid gap-6'>
                        <label className="w-full">
                            <div className="mb-1">
                                <span className="font-semibold text-lg">Additional Notes</span>
                            </div>
                            <textarea rows='5' name='note' defaultValue={food?.note} placeholder="Enter additional notes"
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

export default UpdateFood;
