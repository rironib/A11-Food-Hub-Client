import {Helmet} from "react-helmet-async";
import error from "/404.jpg";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Food Hub | 404 Not Found</title>
            </Helmet>
            <div className='h-screen bg-[#FEFEFE]'>
                <main className='w-11/12 max-w-[1280px] mx-auto'>
                    <div className='h-screen w-full flex flex-col justify-evenly items-center rounded-xl'>
                        <img src={error} alt='Error' className='w-auto max-h-[70dvh]' />
                        <div className='p-3'>
                            <Link to='/' className='bg-slate-900 text-white py-3 px-8 font-lexend text-lg rounded-lg'>
                                Go to homepage
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ErrorPage;