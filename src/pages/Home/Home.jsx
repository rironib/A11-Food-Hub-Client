import {Helmet} from "react-helmet-async";
import Slider from "@/pages/Home/Slider.jsx";
import FoodList from "@/pages/Home/FoodList.jsx";
import {useLoaderData} from "react-router-dom";
import Reviews from "@/pages/Home/Reviews.jsx";
import Newsletter from "@/pages/Home/Newsletter.jsx";

const Home = () => {
    const foods = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Food Hub | Donate Food For Poor People!</title>
            </Helmet>

            <Slider/>
            <FoodList foods={foods}/>
            <Reviews/>
            <Newsletter/>
        </>
    );
};

export default Home;
