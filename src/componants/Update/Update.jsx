import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";




const Update = () => {
const items = useLoaderData();
console.log(items)
const {spotName, _id, countryName, location, description, average, seasonality, travel, totalVisitors, photoURL} = items;
console.log(_id)

    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const average = form.average.value;
        const seasonality = form.seasonality.value;
        const travel = form.travel.value;
        const totalVisitors = form.totalVisitors.value;
        const photoURL = form.photoURL.value;

        const updateSpots = { spotName, countryName, location, description, average, seasonality, travel, totalVisitors, photoURL };
        console.log(updateSpots);

        fetch(`http://localhost:5000/spots/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateSpots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spots updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Update | GoromerAdventure</title>
            </Helmet>
            <div className="mb-20 p-5">
                <h2 className="text-4xl font-extrabold text-center pb-5">Update your tourist spot</h2>

                <form onSubmit={handleAddTouristSpot}>
                    {/* form name and quantity row */}
                    <div className="flex mb-8">
                        <div className="md:w-1/2 mr-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Country Name :</span>
                                </div>
                            </label>
                            <select name="countryName" class=" border p-3 text-gray-900 text-sm rounded-lg  block w-full  bg-[#FFFFFF]">
                                <option selected>Select your favorite country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thiland">Thiland</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Combodia">Combodia</option>

                            </select>
                        </div>

                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Tourists Spot Name :</span>
                                </div>
                                <input type="text" name="spotName" defaultValue={spotName} placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* form Supplier and Taste row */}
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Location :</span>
                                </div>
                                <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Short Description :</span>
                                </div>
                                <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Average Cost :</span>
                                </div>
                                <input type="text" name="average" defaultValue={average} placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className=" md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Seasonality :</span>
                                </div>
                            </label>
                            <select name="seasonality" class=" border p-3 text-gray-900 text-sm rounded-lg  block w-full  bg-[#FFFFFF]">
                                <option selected>Choose your favorite season</option>
                                <option value="summer">Summer</option>
                                <option value="rainy-season">Rainy Season</option>
                                <option value="autumn">Autumn</option>
                                <option value="late-autumn">Late-autumn</option>
                                <option value="winter">Winter</option>
                                <option value="spring">Spring</option>

                            </select>

                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text"> Travel Time :</span>
                                </div>
                                <input type="text" name="travel" defaultValue={travel} placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text"> Total visitors per year :</span>
                                </div>
                                <input type="text" name="totalVisitors" defaultValue={totalVisitors} placeholder="Total Visitors per year" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="w-full mb-8">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">PhotoURL :</span>
                            </div>
                            <input type="text" name="photoURL" defaultValue={photoURL} placeholder="PhotoURL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Update" className="p-3 text-white rounded-lg bg-[#7AA93C] w-full" />
                </form>

            </div>
        </div>
    );
};

export default Update;