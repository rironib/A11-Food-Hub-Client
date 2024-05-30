import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Link} from "react-router-dom";
import {RiDeleteBin7Line, RiPencilFill} from "react-icons/ri";
import useAuth from "@/hooks/useAuth.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {Helmet} from "react-helmet-async";
import useAxiosSecure from "@/hooks/useAxiosSecure.jsx";
import ReactPaginate from 'react-paginate';

const ManageFood = () => {
    const {user} = useAuth();
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const axiosSecure = useAxiosSecure();

    const url = `/manage?email=${user?.email}&page=${currentPage}&limit=${itemsPerPage}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                console.log(res.data)
                setItems(res.data?.items);
                setTotalItems(res.data?.totalItems);
            })
    }, [url, axiosSecure]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // Using axios
                axios.delete(`https://food-hub-api-orpin.vercel.app/foods/${id}`)
                    .then(data => {
                        const result = data.data;
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Food deleted successfully.",
                                icon: "success"
                            });
                            const remaining = items.filter(food => food._id !== id);
                            setItems(remaining);
                        }
                    })
                    .catch(err => {
                        Swal.fire({
                            title: "Error!",
                            text: `${err.message}`,
                            icon: "error"
                        });
                    });
            }
        });
    }

    console.log(items)

    return (
        <>
            <Helmet>
                <title>Food Hub | Manage Foods</title>
            </Helmet>
            <div className="w-full mt-12 mb-20">
                <h2 className='font-bold text-3xl text-center mb-6'>Manage Foods</h2>
                <div className="mb-8 rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Expiration</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Donor</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                items.map((food) => (
                                    <TableRow key={food._id}>
                                        <TableCell>{food.name}</TableCell>
                                        <TableCell>{food.quantity}</TableCell>
                                        <TableCell>{food.location}</TableCell>
                                        <TableCell>{food.expire}</TableCell>
                                        <TableCell>{food.status}</TableCell>
                                        <TableCell>{food.donorName}</TableCell>
                                        <TableCell className='flex gap-2 flex-wrap'>
                                            <Link to={`/update/${food._id}`}
                                                  className='bg-slate-900 p-2 px-4 text-white text-base rounded'><RiPencilFill/></Link>
                                            <button onClick={() => handleDelete(food._id)}
                                                    className='bg-red-600 p-2 px-4 text-white text-base rounded'>
                                                <RiDeleteBin7Line/></button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
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
    )
}

export default ManageFood;