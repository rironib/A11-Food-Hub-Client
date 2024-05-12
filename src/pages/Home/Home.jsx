import {Helmet} from "react-helmet-async";
import Banner from "@/pages/Home/Banner.jsx";
import FoodList from "@/pages/Home/FoodList.jsx";
import {useLoaderData} from "react-router-dom";

const Home = () => {
    const foods = useLoaderData();

    return (
        <>
            <Helmet>
                <title>Food Hub | Donate Food For Poor People!</title>
            </Helmet>

            <Banner/>
            <FoodList foods={foods}/>
        </>
    );
};

export default Home;
