import { FaStar } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";

const Reviews = () => {
    return (
        <div className='mb-20'>
            <div className='my-6 text-center'>
                <h1 className="font-lexend font-bold text-3xl mb-2">User Reviews</h1>
                <p className="sm:w-2/3 mx-auto">
                    Discover Food Hub, Bangladesh's premier community food sharing website. Our platform connects neighbors to share surplus food, reduce waste, and foster a sense of community. Easy to use and completely free, Food Hub helps you make a positive impact in your local area. Join us today!
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-slate-200 dark:bg-slate-800 p-10 rounded-lg'>
                    <div className='flex items-center gap-6 mb-4'>
                        <img src='https://i.ibb.co/SKknj35/userOne.png' className='w-14 rounded-full' alt='User'/>
                        <div>
                            <h3 className='font-lexend font-semibold'>Arif Hossain</h3>
                            <p className='flex items-center gap-2 text-slate-700 dark:text-gray-300'><GoLocation/> Dhaka</p>
                        </div>
                    </div>
                    <p className='text-gray-500 dark:text-gray-400 mb-6'>
                        Food Hub is a fantastic platform for sharing food within our community. It's heartwarming to see neighbors helping each other, and the website is easy to use. Highly recommend for anyone looking to reduce waste and share love.
                    </p>
                    <div className='flex items-center gap-2 font-medium'>
                        <p className='flex gap-0.5 text-violet-500'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <p>(5.0)</p>
                    </div>
                </div>
                <div className='bg-slate-200 dark:bg-slate-800 p-10 rounded-lg'>
                    <div className='flex items-center gap-6 mb-4'>
                        <img src='https://i.ibb.co/BcvZTcz/userTwo.png' className='w-14 rounded-full' alt='User'/>
                        <div>
                            <h3 className='font-lexend font-semibold'>Rahat Ahmed</h3>
                            <p className='flex items-center gap-2 text-slate-700 dark:text-gray-300'><GoLocation/> Chittagong</p>
                        </div>
                    </div>
                    <p className='text-gray-500 dark:text-gray-400 mb-6'>
                        Food Hub has been a game-changer in our neighborhood! It's amazing how much surplus food is being shared. The website is user-friendly and promotes a strong sense of community. Kudos to the team behind this initiative!
                    </p>
                    <div className='flex items-center gap-2 font-medium'>
                        <p className='flex gap-0.5 text-violet-500'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <p>(5.0)</p>
                    </div>
                </div>
                <div className='bg-slate-200 dark:bg-slate-800 p-10 rounded-lg'>
                    <div className='flex items-center gap-6 mb-4'>
                        <img src='https://i.ibb.co/jvMMMBR/user-Three.png' className='w-14 rounded-full' alt='User'/>
                        <div>
                            <h3 className='font-lexend font-semibold'>Tanvir Islam</h3>
                            <p className='flex items-center gap-2 text-slate-700 dark:text-gray-300'><GoLocation/>Sylhet</p>
                        </div>
                    </div>
                    <p className='text-gray-500 dark:text-gray-400 mb-6'>
                        I love Food Hub! It's such a wonderful concept, bringing people together through food sharing. The site is simple to navigate and has helped us reduce waste. A must-use for anyone in Bangladesh looking to make a difference.
                    </p>
                    <div className='flex items-center gap-2 font-medium'>
                        <p className='flex gap-0.5 text-violet-500'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <p>(5.0)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;