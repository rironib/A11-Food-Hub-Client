import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {RiHourglassLine, RiMapPinLine, RiTeamLine} from "react-icons/ri";
import cover from "/no-ph.jpg";
import Avatar from "/avatar.png";

const Card = ({food}) => {
    const {_id, name, quantity, location, expire, note, image, donorName, donorAvatar} = food;

    return (
        <div className='grid gap-3 border p-4 rounded-xl'>
            <div style={{backgroundImage: `url(${image ? image : cover})`}} className='w-full h-48 bg-cover bg-no-repeat bg-center rounded-xl'></div>
            <div className='flex items-center gap-2 mt-2'>
                <img src={donorAvatar ? donorAvatar : Avatar} alt={donorName} className='w-8 h-8 rounded-full'/>
                <h4 className='font-medium text-violet-600'>{donorName}</h4>
            </div>
            <h2 className='text-2xl font-bold font-lexend'>{name}</h2>
            <p className='text-slate-700'>{note}</p>
            <div className='flex flex-wrap justify-start gap-x-4'>
                <div className='flex items-center gap-1'><RiTeamLine/> {quantity}</div>
                <div className='flex items-center gap-1'><RiMapPinLine/> {location}</div>
                <div className='flex items-center gap-1'><RiHourglassLine/> {expire}</div>
            </div>
            <Link to={`/food/${_id}`}
                  className='w-full bg-slate-900 text-white font-semibold p-2 rounded-lg text-center'>
                View Detail
            </Link>
        </div>
    );
};

Card.propTypes = {
    food: PropTypes.object.isRequired
}

export default Card;
