import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import useAuth from "@/hooks/useAuth.jsx";
import useAxiosSecure from "@/hooks/useAxiosSecure.jsx";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";

const MyRequest = () => {
    // Authentication hook
    const { user } = useAuth();
    // State for storing fetched items
    const [items, setItems] = useState([]);
    // State for total number of items
    const [totalItems, setTotalItems] = useState(0);
    // State for current page
    const [currentPage, setCurrentPage] = useState(0);
    // Number of items to display per page
    const [itemsPerPage] = useState(10);
    // Axios instance for secure requests
    const axiosSecure = useAxiosSecure();
    // Calculate total number of pages
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    // URL for fetching data
    const url = `/requests?email=${user?.email}&page=${currentPage}&limit=${itemsPerPage}`;

    // Fetch data when component mounts or dependencies change
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setItems(res.data.items);
                setTotalItems(res.data.totalItems);
            });
    }, [url, currentPage, itemsPerPage, axiosSecure]);

    // Function to handle page clicks
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

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