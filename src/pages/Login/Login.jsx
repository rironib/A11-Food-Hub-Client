import {RiMailFill, RiKeyFill, RiGoogleFill, RiGithubFill, RiEyeLine, RiEyeOffLine} from "react-icons/ri";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
import {Helmet} from "react-helmet-async";
import useAuth from "@/hooks/useAuth.jsx";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const {signIn, signInWithGoogle, signInWithGithub} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                    navigate(location?.state ? location.state : '/');
                    toast.success('Successfully logged in!');
                }
            )
            .catch((error) => {
                if (error.message === "Firebase: Error (auth/invalid-credential)."){
                    toast.error("Please enter valid credentials");
                } else {
                    toast.error(error.message);
                }
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location?.state ? location.state : '/');
                toast.success('Successfully logged in!');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => {
                navigate(location?.state ? location.state : '/');
                toast.success('Successfully logged in!');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <main className='max-w-[480px] w-full p-4 mx-auto my-12'>
                <h1 className='font-lexend font-bold text-3xl mb-6 text-center'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col gap-4 mb-6'>
                        <label className="flex items-center gap-2 p-3 border rounded-lg">
                            <RiMailFill className='opacity-70'/>
                            <input type="text" name='email' className="w-full outline-none" placeholder="Email"
                                   required/>
                        </label>
                        <label className="flex items-center gap-2 p-3 border rounded-lg">
                            <RiKeyFill className='opacity-70'/>
                            <input type={showPass ? 'text' : 'password'} name='password' className="w-full outline-none" placeholder="Password" required/>
                            <span>
                                {
                                    showPass ? <RiEyeLine onClick={() => setShowPass(!showPass)} className='cursor-pointer opacity-80'/> :
                                        <RiEyeOffLine onClick={() => setShowPass(!showPass)} className='cursor-pointer opacity-80'/>
                                }
                            </span>
                        </label>
                        <button className='w-full bg-slate-900 p-3 font-semibold text-white rounded-lg'>Login
                        </button>
                    </div>
                </form>

                <div className='grid sm:grid-cols-2 gap-2'>
                    <button onClick={handleGoogleSignIn}
                            className="w-full p-3 flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-lg">
                        <RiGoogleFill className='text-lg'/> Google Login
                    </button>
                    <button onClick={handleGithubSignIn}
                            className="w-full p-3 flex justify-center items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white hover:text-white border-0 rounded-lg">
                        <RiGithubFill className='text-lg'/> GitHub Login
                    </button>
                </div>
                <p className='mt-4 text-center'>Don’t have an account? <Link to='/register' className='text-blue-600 text-center'>Register</Link>
                </p>
            </main>
        </>
    );
};

export default Login;
