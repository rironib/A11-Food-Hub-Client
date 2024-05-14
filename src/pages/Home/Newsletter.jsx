import Swal from "sweetalert2";

const Newsletter = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        if(email.length > 0) {
            Swal.fire({
                title: "Success",
                text: "Subscription successfull!",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Error",
                text: "Something went wrong",
                icon: "error",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }

    return (
        <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-96 mb-20 dark:bg-gray-800 border dark:border-slate-700 overflow-clip rounded-xl'>
            <div className='bg-[url("https://media-cdn2.greatbritishchefs.com/media/ribbanef/img81602.whqc_2044x1362q80.webp")] bg-cover bg-no-repeat bg-center'>
            </div>
            <form onSubmit={handleSubscribe} className='w-full lg:w-3/4 mx-auto flex flex-col items-center justify-center gap-6 p-8'>
                <h2 className='font-bold text-3xl text-center'>
                    Get food updates and many more from <b className='text-purple-600 font-lexend'>Food Hub</b>
                </h2>
                <p className='font-lexend text-center text-gray-500'>
                    Subscribe to see latest foods drop the moment you sign up!
                </p>
                <label className='w-full bg-gray-100 dark:bg-gray-700 flex p-2 border dark:border-slate-600 rounded-full'>
                    <input type='text' name='email' className='bg-transparent w-full ps-4 text-gray-500 outline-none rounded-full' placeholder='Email Address' />
                    <button className='bg-violet-600 text-white px-5 py-2 rounded-full'>Subscribe</button>
                </label>
            </form>
        </div>
    );
};

export default Newsletter;
