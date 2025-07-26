import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {RiMapPinLine, RiTimeLine, RiUserCommunityLine} from "react-icons/ri";
import {motion} from "framer-motion";
import cover from "/no-ph.jpg";
import Avatar from "/avatar.png";

const Card = ({food}) => {
    const {_id, name, quantity, location, expire, note, image, donorName, donorAvatar} = food;

    return (
        <motion.div
            className='grid gap-3 border p-4 rounded-xl'
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
        >
            <motion.div
                style={{backgroundImage: `url(${image ? image : cover})`}}
                className='w-full h-48 bg-cover bg-no-repeat bg-center rounded-xl'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            ></motion.div>
            <div className='flex items-center gap-2 mt-2'>
                <img src={donorAvatar ? donorAvatar : Avatar} alt={donorName} className='w-8 h-8 rounded-full'/>
                <h4 className='font-medium text-violet-600'>{donorName}</h4>
            </div>
            <h2 className='text-2xl font-bold font-lexend'>{name}</h2>
            <p className='text-slate-700'>{note}</p>
            <div className='flex flex-wrap justify-start gap-x-4'>
                <div className='flex items-center gap-1'>
                    <RiUserCommunityLine/> {quantity}
                </div>
                <div className='flex items-center gap-1'>
                    <RiMapPinLine/> {location}
                </div>
                <div className='flex items-center gap-1'>
                    <RiTimeLine/> {expire}
                </div>
            </div>
            <Link
                to={`/food/${_id}`}
                className='w-full bg-slate-900 text-white font-semibold p-2 rounded-lg text-center'
            >
                View Detail
            </Link>
        </motion.div>
    );
};

Card.propTypes = {
    food: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        location: PropTypes.string.isRequired,
        expire: PropTypes.string.isRequired,
        note: PropTypes.string,
        image: PropTypes.string,
        donorName: PropTypes.string.isRequired,
        donorAvatar: PropTypes.string,
    }).isRequired,
};

export default Card;
