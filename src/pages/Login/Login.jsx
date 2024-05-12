import {Helmet} from "react-helmet-async";
import {RiGithubFill, RiGoogleFill} from "react-icons/ri";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button.jsx";
import {toast} from "react-toastify";
import useAuth from "@/hooks/useAuth.jsx";
import axios from "axios";

const Login = () => {
    const {signIn, signInWithGoogle, signInWithGithub} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then((userCredential) =>
                {
                    const user = userCredential.user;
                    const uid = user?.uid;
                    const displayName = user?.displayName;
                    const photoURL = user?.photoURL;
                    const creationTime = user?.metadata?.creationTime;
                    const lastSignInTime = user?.metadata?.lastSignInTime;
                    const updateUser = {uid, email, displayName, photoURL, creationTime, lastSignInTime};

                    // Get access token
                    axios.post('https://car-doctor-api.vercel.app/jwt', email, {withCredentials: true})
                        .then(res => console.log(res.data))
                        .catch(error => console.error(error));

                    // Using axios
                    axios.patch('https://espresso-emporium-server-mu.vercel.app/user', updateUser)
                        .then(() => {
                            navigate(location?.state ? location.state : '/');
                            toast.success('Successfully logged in!');
                        })
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

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     // console.log(email, password);
    //
    //     signIn(email, password)
    //         .then(userCredential => {
    //             const loggedUser = userCredential.user;
    //             const user = {email};
    //             // console.log(user);
    //
    //             // Get access token
    //             //     axios.post('https://car-doctor-api.vercel.app/jwt', user, {withCredentials: true})
    //             //         .then(res => console.log(res.data))
    //             //         .catch(error => console.error(error));
    //
    //             navigate(location?.state ? location.state : '/');
    //             toast.success('User logged in successfully.');
    //         })
    //         .catch(error => toast.error(error));
    // }

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
                <title>Food Hub | Login</title>
            </Helmet>
            <div className='h-full my-12 mx-auto max-w-[560px] grid gap-4'>
                <div className='p-12 border rounded-xl'>
                    <h2 className='font-bold text-2xl text-center'>Login</h2>
                    <form onSubmit={handleLogin} className='flex flex-col gap-4 my-6'>
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
                        <Button onClick={handleGoogleSignIn}><RiGoogleFill/></Button>
                        <Button onClick={handleGithubSignIn}><RiGithubFill/></Button>
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
