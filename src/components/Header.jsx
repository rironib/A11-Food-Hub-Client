import {Button} from "@/components/ui/button.jsx";
import {Link, NavLink} from "react-router-dom";
import {RiMenuFill} from "react-icons/ri";
import {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className='bg-base-100 shadow'>
            <div className='w-[98%] lg:w-10/12 max-w-[1275px] mx-auto sticky top-0 flex justify-between items-center p-2 lg:p-3'>
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
                    <Link to='/' className='text-xl lg:text-3xl font-lexend'>
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
                <div className='flex gap-2'>
                    <Button asChild>
                        <Link to='/login'>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link to='/register'>Sign up</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
