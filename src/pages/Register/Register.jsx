import {Helmet} from "react-helmet-async";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "@/hooks/useAuth.jsx";
import {toast} from "react-toastify";
import axios from "axios";

const Register = () => {
    const {createUser, updateUser} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const displayName = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        // Create user
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                const uid = user?.uid;
                const creationTime = user?.metadata?.creationTime;
                const lastSignInTime = user?.metadata?.lastSignInTime;

                const newUser = {uid, email, displayName, photoURL, creationTime, lastSignInTime};

                // Get access token
                axios.post('https://car-doctor-api.vercel.app/jwt', email, {withCredentials: true})
                    .then(res => console.log(res.data))
                    .catch(error => console.error(error));

                // Using axios
                axios.post('https://espresso-emporium-server-mu.vercel.app/register', newUser)
                    .then((data) => {
                        const result = data.data;
                        if (result.insertedId) {
                            navigate(location?.state ? location.state : '/');
                            toast.success("Account created successfully");
                        }
                    })

                updateUser(displayName, photoURL)
                    .then(() => {} )
                    .catch(() => {
                        return null;
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
                <title>Food Hub | Register</title>
            </Helmet>
            <div className='h-full my-12 mx-auto max-w-[560px] grid gap-4'>
                <div className='p-12 border rounded-xl'>
                    <h2 className='font-bold text-2xl text-center'>Registration</h2>
                    <form onSubmit={handleRegister} className='flex flex-col gap-6 mt-6'>
                        <label className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-600'>Name</span>
                            <input type="text" name='name' className='p-3 border rounded-lg outline-none'
                                   placeholder='Enter your full name' required/>
                        </label>
                        <label className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-600'>Email</span>
                            <input type="text" name='email' className='p-3 border rounded-lg outline-none'
                                   placeholder='Enter your email address' required/>
                        </label>
                        <label className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-600'>Avatar</span>
                            <input type="text" name='photo' className='p-3 border rounded-lg outline-none'
                                   placeholder='Enter your photo link' required/>
                        </label>
                        <label className='flex flex-col gap-2'>
                            <span className='font-medium text-gray-600'>Password</span>
                            <input type='password' name='password'
                                   className='p-3 border rounded-lg outline-none' placeholder='Enter your password'
                                   required/>
                        </label>
                        <button className='bg-slate-900 py-3 font-medium text-white rounded-lg outline-none'>
                            Sign up
                        </button>
                    </form>
                    <p className='mt-8 text-center text-[#737373]'>
                        Have an account? <Link to='/login' className='font-medium text-slate-800'>Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
