import Card from "@/components/Card.jsx";
import PropTypes from "prop-types";
import {RiLayoutGrid2Fill, RiLayoutGridFill} from "react-icons/ri";
import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";

const FoodList = ({foods}) => {
    const [grid, setGrid] = useState(false);

    const handleGrid = () => setGrid(!grid);

    return (
        <div className='mb-20'>
            <div className='lg:w-1/2 mx-auto text-center'>
                <h2 className='mb-4 text-3xl font-bold'>Featured Foods</h2>
                <p className='text-slate-700 mb-8'>Explore mouthwatering Featured Foods - a curated selection of culinary delights awaiting your discovery and enjoyment.</p>
            </div>
            <div className='flex justify-end gap-4 my-4 text-2xl'>
                <Button onClick={handleGrid} disabled={`${grid ? 'disabled' : ''}`}><RiLayoutGridFill /></Button>
                <Button onClick={handleGrid} disabled={`${!grid ? 'disabled' : ''}`}><RiLayoutGrid2Fill /></Button>
            </div>
            <div className={`grid ${grid ? 'grid-cols-2' : 'grid-cols-3'} gap-5`}>
                {
                    foods.map(food => <Card key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

FoodList.propTypes = {
    foods: PropTypes.array.isRequired
}

export default FoodList;
