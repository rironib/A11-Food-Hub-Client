import {Helmet} from "react-helmet-async";
import Banner from "@/pages/Home/Banner.jsx";
import FoodCards from "@/pages/Home/FoodCards.jsx";
import {useLoaderData} from "react-router-dom";

const Home = () => {
    const foods = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Food Hub | Donate Food For Poor People!</title>
            </Helmet>

            <Banner/>
            <FoodCards foods={foods}/>
        </>
    );
};

export default Home;
