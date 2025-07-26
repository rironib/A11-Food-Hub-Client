import {Helmet} from "react-helmet-async";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import useAuth from "@/hooks/useAuth.jsx";
import useAxiosSecure from "@/hooks/useAxiosSecure.jsx";
import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";
import Loading from "@/components/Loading.jsx";

const MyRequest = () => {
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);
    const axiosSecure = useAxiosSecure();
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const url = `/requests?email=${user?.email}&page=${currentPage}&limit=${itemsPerPage}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setItems(res.data.items);
                setTotalItems(res.data.totalItems);
                setLoading(false);
            });
    }, [url, currentPage, itemsPerPage, axiosSecure]);

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
                    {loading ? (
                        <div className="w-full flex justify-center items-center h-48">
                            <Loading/>
                        </div>
                    ) : (
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
                    )}
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