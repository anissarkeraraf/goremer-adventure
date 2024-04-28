import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyList = () => {


    const { user } = useContext(AuthContext);
    console.log(user.email)

    const [values, setValues] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/spot/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setValues(data)
            })
    }, [user])

    return (
        <div className="mb-16 w-11/12 mx-auto mt-10">
            <Helmet>
                <title>My List | GoromerAdventure</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
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
                        {/* row 1 */}
                        {values.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.spotName}</td>
                                <td>{item.countryName}</td>
                                <td>{item.location}</td>
                                <td>{item.average} /<small>$</small></td>
                                <td>
                                   <Link to={`/update/${item._id}`}> <button className="bg-[#33B249] mr-2 text-white rounded p-1">Update</button></Link>
                                    <button className="bg-[#33B249] text-white rounded p-1">Delete</button>
                                </td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;