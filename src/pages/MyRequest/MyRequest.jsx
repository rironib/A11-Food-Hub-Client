import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import useAuth from "@/hooks/useAuth.jsx";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading.jsx";
import useAxiosSecure from "@/hooks/useAxiosSecure.jsx";
import ReactPaginate from 'react-paginate';
import {useState} from "react";

const MyRequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const url = `/requests?email=${user?.email}&page=${currentPage}&limit=${itemsPerPage}`;

    const { isLoading, data, error } = useQuery({
        queryKey: ['food', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(url);
            return response.data;
        },
        staleTime: 60000,
        cacheTime: 300000,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    }

    const items = data.items;
    const totalItems = data.totalItems;
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    return (
        <>
            <Helmet>
                <title>Food Hub | My Request</title>
            </Helmet>
            <div className="w-full mt-12 mb-20">
                <h2 className='font-bold text-3xl text-center mb-6'>Requested Foods</h2>
                <div className="mb-8 rounded-md border">
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
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"border"}
                    activeClassName={"active"}
                />
            </div>
        </>
    );
};

export default MyRequest;
