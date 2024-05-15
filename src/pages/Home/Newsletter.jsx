import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import cover from '/8610492_5964.jpg';

const Newsletter = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = () => {
        Swal.fire({
            title: "Success",
            text: "Subscription successful!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000
        });
        reset();
    };

    const onError = () => {
        Swal.fire({
            title: "Error",
            text: "Please enter a valid email address.",
            icon: "error",
            showConfirmButton: false,
            timer: 2000
        });
    };

    return (
        <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-96 mb-20 dark:bg-gray-800 border dark:border-slate-700 overflow-clip rounded-xl'>
            <div style={{backgroundImage: `url(${cover})`}} className='bg-cover bg-no-repeat bg-center'>
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)} className='w-full lg:w-3/4 mx-auto flex flex-col items-center justify-center gap-6 p-8'>
                <h2 className='font-bold text-3xl text-center'>
                    Get food updates and many more from <b className='text-purple-600 font-lexend'>Food Hub</b>
                </h2>
                <p className='font-lexend text-center text-gray-500'>
                    Subscribe to see latest foods drop the moment you sign up!
                </p>
                <label className='w-full bg-gray-100 dark:bg-gray-700 flex p-2 border dark:border-slate-600 rounded-full' aria-label='Email Address'>
                    <input
                        type='text'
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address"
                            }
                        })}
                        className='bg-transparent w-full ps-4 text-gray-500 outline-none rounded-full'
                        placeholder='Email Address'
                    />
                    <button type='submit' className='bg-violet-600 text-white px-5 py-2 rounded-full'>Subscribe</button>
                </label>
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </form>
        </div>
    );
};

export default Newsletter;
