import {Button} from "@/components/ui/button.jsx";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {RiMenuFill} from "react-icons/ri";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "@/hooks/useAuth.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header = () => {
    const {user, logOut} = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        await logOut()
            .then(() => {
                navigate('/login');
                toast.error("Logged out successfully.")
            })
            .catch((error) => toast.error(error.message))
    }

    return (
        <header className='bg-slate-50 sticky top-0 z-10 shadow'>
            <div className='w-[98%] lg:w-10/12 max-w-[1275px] mx-auto flex justify-between items-center p-2 lg:p-3'>
                <div className='flex items-center gap-2'>
                    <div className='lg:hidden relative'>
                        <Button onClick={toggleMenu}><RiMenuFill /></Button>
                        <div className={`${isOpen ? 'flex flex-col gap-3' : 'hidden'} absolute top-14 w-max bg-slate-200 p-4 rounded-md`}>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/available'>Available</NavLink>
                            <NavLink to='/add'>Add Food</NavLink>
                            <NavLink to='/manage'>Manage</NavLink>
                            <NavLink to='/request'>My Request</NavLink>
                        </div>
                    </div>
                    <Link to='/' className='text-xl lg:text-3xl font-black font-lexend'>
                        Food Hub
                    </Link>
                </div>
                <div className='hidden lg:flex items-center gap-4'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/available'>Available</NavLink>
                    <NavLink to='/add'>Add Food</NavLink>
                    <NavLink to='/manage'>Manage Foods</NavLink>
                    <NavLink to='/request'>My Request</NavLink>
                </div>
                <div className='flex gap-4'>
                    {
                        user ? (
                            <>
                                <Avatar>
                                    <AvatarImage src={user.photoURL} />
                                    <AvatarFallback>{user.displayName}</AvatarFallback>
                                </Avatar>
                                <Button onClick={handleLogout}>Log out</Button>
                            </>
                        ) : (
                            <>
                                <Button asChild>
                                    <Link to='/login'>Login</Link>
                                </Button>
                                <Button asChild>
                                    <Link to='/register'>Sign up</Link>
                                </Button>
                            </>
                        )
                    }
                </div>
            </div>
            <ToastContainer
                autoClose={2000}
                theme="colored"
            />
        </header>
    );
};

export default Header;
