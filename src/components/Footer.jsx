import {FiMail, FiPhone} from "react-icons/fi";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-10'>
                <div className='xl:col-span-2 text-center sm:text-start'>
                    <h2 className='text-3xl font-lexend font-bold'>Food Hub</h2>
                    <p className='mt-4 sm:text-justify text-slate-300'>
                        Food Hub is Bangladesh’s leading community food sharing website, promoting neighborly connections and reducing waste. Free and easy to use, our platform encourages sharing surplus food to foster a supportive and sustainable community.
                    </p>
                </div>
                <div className='text-center sm:text-start'>
                    <h4 className='text-xl font-semibold'>Contact Us</h4>
                    <div className='mt-4 space-y-2 text-slate-300 *:flex *:justify-center sm:*:justify-start *:items-center *:gap-2'>
                        <div><FiMail/> info@foodhub.org</div>
                        <div><FiPhone/> (123) 456-7890</div>
                    </div>
                </div>
                <div className='text-center sm:text-start'>
                    <h4 className='text-xl font-semibold'>Follow Us</h4>
                    <div className='mt-4 text-slate-300 flex justify-center sm:justify-start gap-4 text-2xl *:cursor-pointer'>
                        <FaFacebookF/>
                        <FaTwitter/>
                        <FaLinkedinIn/>
                        <FaInstagram/>
                    </div>
                </div>
                <div className='text-center sm:text-start'>
                    <h4 className='text-xl font-semibold'>Address</h4>
                    <div className='mt-4 text-slate-300'>
                        Level-4, Awal Centre, Banani, Dhaka
                    </div>
                </div>
            </div>
            <div className='py-4 text-center border-t border-gray-700'>
                <p>&copy; {new Date().getFullYear()} Food Hub. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
