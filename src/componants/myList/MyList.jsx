import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/spot/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setValues(data);
            })
            .catch(error => {
                console.error('Error fetching spots:', error);
            });
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spots/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const updatedValues = values.filter(item => item._id !== id);
                            setValues(updatedValues);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Spot deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="mb-16 w-11/12 mx-auto mt-10">
            <Helmet>
                <title>My List | GoromerAdventure</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Spot Name</th>
                            <th>Country Name</th>
                            <th>Location</th>
                            <th>Average Cost /<small>per person</small></th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.spotName}</td>
                                <td>{item.countryName}</td>
                                <td>{item.location}</td>
                                <td>{item.average} /<small>$</small></td>
                                <td>
                                    <Link to={`/update/${item._id}`}>
                                        <button className="bg-[#33B249] mr-2 text-white rounded p-1">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(item._id)} className="bg-[#33B249] text-white rounded p-1">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
