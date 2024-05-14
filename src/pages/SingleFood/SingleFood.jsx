import {Helmet} from "react-helmet-async";
import {useLoaderData} from "react-router-dom";
import cover from "/no-ph.jpg";
import Avatar from "/avatar.png";
import Modal from "@/pages/SingleFood/Modal.jsx";

const SingleFood = () => {
    // const {user} = useAuth();
    const food = useLoaderData();
    const {name, quantity, location, expire, note, image, status, donorName, donorAvatar} = food;

    return (
        <>
            <Helmet>
                <title>Food Hub | {food.name ? food.name : 'Food Details'}</title>
            </Helmet>
            <div className='grid md:grid-cols-3 gap-6 my-12 border-2 overflow-hidden rounded-xl'>
                <div className='md:col-span-2'>
                    <div style={{backgroundImage: `url(${image ? image : cover})`}} className='w-full min-h-96 bg-cover bg-no-repeat bg-center'></div>
                </div>
                <div className='flex flex-col justify-between gap-4 p-6'>
                    <div>
                        <h4 className='w-max bg-slate-900 text-white rounded-full px-4 py-1 mb-2 text-sm'>{status}</h4>
                        <h1 className='text-4xl font-bold font-lexend'>{name}</h1>
                        <div className='flex items-center gap-2 mt-4'>
                            <img src={donorAvatar ? donorAvatar : Avatar} alt={donorName}
                                 className='w-8 h-8 rounded-full'/>
                            <h4 className='font-semibold text-purple-600'>{donorName}</h4>
                        </div>
                    </div>
                    <div className='flex flex-col flex-wrap justify-start gap-2'>
                    <div className='flex items-center gap-1'><b>Quantity: </b> {quantity}</div>
                        <div className='flex items-center gap-1'><b>Location: </b> {location}</div>
                        <div className='flex items-center gap-1'><b>Expire Date: </b> {expire}</div>
                    </div>
                    <p><b>Note: </b>{note}</p>
                    <Modal food={food}/>
                </div>
            </div>
        </>
    );
};

export default SingleFood;
