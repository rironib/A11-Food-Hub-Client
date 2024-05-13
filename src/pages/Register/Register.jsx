import axios from "axios";
import {
    RiMailLine,
    RiKeyLine,
    RiEyeLine,
    RiEyeOffLine,
    RiUser3Line,
    RiImageLine,
} from "react-icons/ri";
import {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet-async";
import useAuth from "@/hooks/useAuth.jsx";


const Register = () => {
    const {createUser, updateUser} = useAuth();
    const [showPass, setShowPass] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // Create user
        createUser(email, password)
            .then(() => {
                updateUser(displayName, photoURL)
                    .then(() => {
                        navigate(location?.state ? location.state : '/');
                        toast.success("Account created successfully");
                    } )
                    .catch((error) => {
                        toast.error(error.message);
                    });
            })
            .catch((error) => {
                if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                    return toast.error("This email already used");
                } else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    return toast.error("Please enter valid password");
                }
                toast.error(error.message);
            });
    }
    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <main className='max-w-[480px] w-full p-4 mx-auto my-8'>
                <h1 className='font-lexend font-bold text-3xl mb-6 text-center'>Registration</h1>
                <form onSubmit={handleRegister}>
                    <div className='flex flex-col gap-4'>
                        <label className="flex items-center gap-2 p-3 border rounded-lg">
                            <RiUser3Line className='opacity-80'/>
                            <input type="text" name='name' className="w-full outline-none" placeholder="Enter your name" required/>
                        </label>
                        <label className="flex items-center gap-2 p-3 border rounded-lg">
                            <RiMailLine className='opacity-80'/>
                            <input type="email" name='email' className="w-full outline-none" placeholder="Enter your email" required/>
                        </label>
                        <label className="flex items-center gap-2 p-3 border rounded-lg">
                            <RiImageLine className='opacity-80'/>
                            <input type="url" name='photo' className="w-full outline-none" placeholder="Photo Link" required/>
                        </label>
                        <label className="flex items-center gap-2 p-3 border rounded-lg">
                            <RiKeyLine className='opacity-80'/>
                            <input type={showPass ? 'text' : 'password'} name='password' className="w-full outline-none" placeholder="Password" required/>
                            <span>
                                {
                                    showPass ? <RiEyeLine onClick={() => setShowPass(!showPass)}
                                                          className='cursor-pointer opacity-80'/> :
                                        <RiEyeOffLine onClick={() => setShowPass(!showPass)}
                                                      className='cursor-pointer opacity-80'/>
                                }
                            </span>
                        </label>
                        <button className='w-full bg-slate-800 py-3 font-semibold text-gray-300 rounded-lg'>Sign up</button>
                        <div className='mt-2 text-center'>
                            Already have an account? <Link to='/login' className='text-blue-600 text-center'>Login</Link>
                        </div>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Register;