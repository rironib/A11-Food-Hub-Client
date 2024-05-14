import {Helmet} from "react-helmet-async";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import useAuth from "@/hooks/useAuth.jsx";

const MyRequest = () => {
    const {user} = useAuth();
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get('https://food-hub-api-orpin.vercel.app/requests')
            .then(res => setRequests(res.data))
    }, []);

    console.log(requests)

    return (
        <>
            <Helmet>
                <title>Food Hub | My Request</title>
            </Helmet>
            <div className="w-full mt-12 mb-20">
                <h2 className='font-bold text-3xl text-center mb-6'>Requested Foods</h2>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Expire Date</TableHead>
                                <TableHead>Request Date</TableHead>
                                <TableHead>Donor</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.map((food) => {
                                if (food.userEmail === user.email) {
                                    return (
                                        <TableRow key={food._id}>
                                            <TableCell>{food.name}</TableCell>
                                            <TableCell>{food.quantity}</TableCell>
                                            <TableCell>{food.location}</TableCell>
                                            <TableCell>{food.expire}</TableCell>
                                            <TableCell>{food.reqDate}</TableCell>
                                            <TableCell>{food.donorName}</TableCell>
                                        </TableRow>
                                    );
                                }
                                return null;
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default MyRequest;
