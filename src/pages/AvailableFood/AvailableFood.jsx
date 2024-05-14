import {Helmet} from "react-helmet-async";
import {useLoaderData} from "react-router-dom";
import Card from "@/components/Card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {RiLayoutGrid2Fill, RiLayoutGridFill, RiSortAsc, RiSortDesc} from "react-icons/ri";
import {useEffect, useState} from "react";
import Loading from "@/components/Loading.jsx";

const AvailableFood = () => {
    const [loading, setLoading] = useState(true);
    const foods = useLoaderData();
    const filteredFoods = foods.filter(food => food.status === 'Available');
    const [items, setItems] = useState(filteredFoods);
    const [searchTerm, setSearchTerm] = useState("");
    const [grid, setGrid] = useState(false);

    useEffect(() => {
        if(items.length > 0){
            const timeOut = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timeOut);
        }
    }, [items]);

    const handleGrid = () => setGrid(!grid);

    const handleSearch = e => {
        setSearchTerm(e.target.value);
        const results = filteredFoods.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setItems(results);
    }

    const [asc, setAsc] = useState(false);
    const [dsc, setDsc] = useState(false);

    const handleSorting = (order) => {
        if (order === 'asc') {
            setAsc(true);
            setDsc(false);
            const sortedItems = items.slice().sort((a, b) => new Date(a.expire) - new Date(b.expire));
            setItems(sortedItems);
        } else if (order === 'dsc') {
            setAsc(false);
            setDsc(true);
            const sortedItems = items.slice().sort((a, b) => new Date(b.expire) - new Date(a.expire));
            setItems(sortedItems);
        }
    };

    return (
        <>
            <Helmet>
                <title>Food Hub | Available Food</title>
            </Helmet>
            <div className='mt-12 mb-20'>
                <div className='lg:w-1/2 mx-auto text-center font-lexend'>
                    <h2 className='mb-4 text-3xl font-bold'>Available Foods</h2>
                    <p className='text-slate-700 mb-8'>Explore mouthwatering Available Foods - a curated selection of
                        culinary delights awaiting your discovery and enjoyment.</p>
                </div>
                <div className='sm:hidden'>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={handleSearch}
                        className='w-full p-3 border rounded-lg outline-none'
                    />
                </div>
                <div className='flex justify-between items-center gap-4 mt-6 mb-8'>
                    <div className='flex justify-end gap-4 text-2xl'>
                        <Button onClick={handleGrid} disabled={`${grid ? 'disabled' : ''}`}><RiLayoutGridFill/></Button>
                        <Button onClick={handleGrid}
                                disabled={`${!grid ? 'disabled' : ''}`}><RiLayoutGrid2Fill/></Button>
                    </div>
                    <div className='hidden sm:block'>
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={handleSearch}
                            className='md:w-80 xl:w-96 p-3 border rounded-lg outline-none'
                        />
                    </div>
                    <div className='flex justify-end gap-4 text-2xl'>
                        <Button onClick={() => handleSorting('asc')} disabled={asc}><RiSortAsc/></Button>
                        <Button onClick={() => handleSorting('dsc')} disabled={dsc}><RiSortDesc/></Button>
                    </div>
                </div>
                { loading ? <Loading/> : (
                    <div className={`grid ${grid ? 'md:grid-cols-2 md:gap-12' : 'grid-cols-2 md:grid-cols-3'} gap-5`}>
                        {
                            items.map(food => <Card key={food._id} food={food}/>)
                        }
                    </div>
                )}
            </div>
        </>
    );
};

export default AvailableFood;