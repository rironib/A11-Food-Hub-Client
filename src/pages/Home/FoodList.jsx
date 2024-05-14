import Card from "@/components/Card.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import Loading from "@/components/Loading.jsx";

const FoodList = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://food-hub-api-orpin.vercel.app/foods')
        .then(res => {
            setFoods(res.data);
            setLoading(false);
        })
        .catch(err => toast.error(err.message));
    }, [])

    const filteredFoods = foods.filter(food => food.status === 'Available');
    const sortedFoods = filteredFoods.sort((a, b) => b.quantity - a.quantity);
    const updatedFoods = sortedFoods.slice(0,6);

    return (
        <div className='mb-20'>
            <div className='lg:w-1/2 mx-auto text-center'>
                <h2 className='mb-4 text-3xl font-bold'>Featured Foods</h2>
                <p className='text-slate-700 mb-8'>Explore mouthwatering Featured Foods - a curated selection of culinary delights awaiting your discovery and enjoyment.</p>
            </div>
            {
                loading ? <Loading/> : (
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            updatedFoods.map(food => <Card key={food._id} food={food}/>)
                        }
                    </div>
                )
            }
            <div className='mt-8 text-center'>
                <Link to='/available' className='bg-slate-900 text-white px-6 py-3 rounded-lg'>
                    See All Foods
                </Link>
            </div>
        </div>
    );
};

export default FoodList;
