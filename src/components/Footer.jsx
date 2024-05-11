import {FiMail, FiPhone} from "react-icons/fi";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa6";
import {AiFillHome} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className='w-[98%] lg:w-10/12 max-w-[1275px] mx-auto py-12 grid lg:grid-cols-5 gap-4'>
                <div className='col-span-2'>
                    <h2 className='text-3xl font-lexend font-bold'>Food Hub</h2>
                    <p className='mt-4 text-slate-300'>
                        Your Ultimate Destination for Food Sharing and Community Engagement!
                    </p>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Contact Us</h4>
                    <div className='mt-4 text-slate-300 *:flex *:items-center *:gap-2'>
                        <div><FiMail/> info@foodhub.org</div>
                        <div><FiPhone/> (123) 456-7890</div>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Follow Us</h4>
                    <div className='mt-4 text-slate-300 flex gap-4 text-2xl *:cursor-pointer'>
                        <FaFacebookF/>
                        <FaTwitter/>
                        <FaLinkedinIn/>
                        <FaInstagram/>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>Address</h4>
                    <div className='mt-4 text-slate-300'>
                        Level-4, Awal Centre, Banani, Dhaka
                    </div>
                </div>
            </div>
            <div className='py-4 text-center border-t border-gray-700'>
                <p>&copy; {new Date().getFullYear()} Food Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
