import {Helmet} from "react-helmet-async";
import {RiGithubFill, RiGithubLine, RiGoogleFill} from "react-icons/ri";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.jsx";
import {Button} from "@/components/ui/button.jsx";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Food Hub | Login</title>
            </Helmet>
            <div className='h-full my-12 mx-auto max-w-[560px] grid gap-4'>
                        <div className='p-12 border rounded-xl'>
                            <h2 className='font-bold text-2xl text-center'>Login</h2>
                            {/*<form onSubmit={handleLogin} className='flex flex-col gap-6 mt-6'>*/}
                            <form className='flex flex-col gap-4 mt-4 mb-6'>
                                <label className='flex flex-col gap-2'>
                                    <span className='font-medium text-gray-600'>Email</span>
                                    <input type="text" name='email' className='p-3 border rounded-lg outline-none'
                                           placeholder='Your email' required/>
                                </label>
                                <label className='flex flex-col gap-2'>
                                    <span className='font-medium text-gray-600'>Password</span>
                                    <input type='password' name='password'
                                           className='p-3 border rounded-lg outline-none' placeholder='Your password'
                                           required/>
                                </label>
                                <button className='bg-slate-900 py-3 font-medium text-white rounded-lg outline-none'>
                                    Login
                                </button>
                            </form>
                            <div
                                className='w-full grid grid-cols-2 gap-4 *:text-xl'>
                                <Button><RiGoogleFill/></Button>
                                <Button><RiGithubFill/></Button>
                            </div>
                            <p className='mt-8 text-center text-[#737373]'>
                                Don't have an account? <Link to='/register' className='font-medium text-slate-800'>Sign
                                up</Link>
                            </p>
                        </div>
                    </div>
        </>
    );
};

export default Login;
