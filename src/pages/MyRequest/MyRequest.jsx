import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import useAuth from "@/hooks/useAuth.jsx";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading.jsx";
import useAxiosSecure from "@/hooks/useAxiosSecure.jsx";

const MyRequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const url = `/requests?email=${user?.email}`;

    const { isPending, data: items, error } = useQuery({
        queryKey: ['food', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(url);
            return response.data;
        },
        staleTime: 60000,
        cacheTime: 300000,
    });

    if (isPending) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
                            {items?.map((food) => (
                                <TableRow key={food._id}>
                                    <TableCell>{food.name}</TableCell>
                                    <TableCell>{food.quantity}</TableCell>
                                    <TableCell>{food.location}</TableCell>
                                    <TableCell>{new Date(food.expire).toLocaleDateString()}</TableCell>
                                    <TableCell>{new Date(food.reqDate).toLocaleDateString()}</TableCell>
                                    <TableCell>{food.donorName}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default MyRequest;
