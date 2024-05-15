import axios from "axios";
import {useEffect} from "react";
import useAuth from "./useAuth.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const axiosSecure = axios.create({
    baseURL: 'https://food-hub-api-orpin.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            // console.log('Error in interceptor: ', error.response.status);
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login');
                        // console.log('Logged out successfully.');
                    })
                    .catch((error) => toast.error(error.message))
            }
        })
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
