import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between'>
                <Header/>

                <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto flex-grow'>
                    <Outlet/>
                </main>

                <Footer/>
            </div>
        </>
    );
};

export default Root;
