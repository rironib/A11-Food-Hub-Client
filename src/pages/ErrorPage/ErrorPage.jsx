import {useNavigate, useRouteError} from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import {Helmet} from "react-helmet-async";
import {Button} from "@/components/ui/button.jsx";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    const handleGoHome = () => {
        navigate('/');
    }
    return (
        <>
            <Helmet>
                <title>Food Hub | Not Found</title>
            </Helmet>
            <div className='flex flex-col min-h-screen justify-center'>
                <main className='w-11/12 max-w-[1280px] mx-auto'>
                    <div className='min-h-[70vh] w-full p-6 flex flex-col justify-center items-center rounded-xl'>
                        <h1 className='mb-8 text-9xl font-bold'>{error.status}</h1>
                        <h3 className='mb-4 text-4xl font-bold'>{error.statusText}</h3>
                        <p className='mb-6 md:w-2/5 text-lg text-center'>
                            But do not worry, you can find plenty of other books on our homepage.
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center gap-6'>
                            <Button onClick={handleGoBack}>Go Back</Button>
                            <Button onClick={handleGoHome}>Go to homepage</Button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ErrorPage;