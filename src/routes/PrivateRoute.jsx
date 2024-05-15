import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth.jsx";
import Loading from "@/components/Loading.jsx";

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate state={location.pathname} to='/login'/>
    } else {
        return children;
    }

    return (
        <div className='flex justify-center items-center'>
            <Loading/>
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;