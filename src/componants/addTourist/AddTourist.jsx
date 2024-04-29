import { IoIosArrowDown } from "react-icons/io";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const AddTourist = () => {

    const { user } = useContext(AuthContext);
    console.log(user)


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
        const email = form.email.value;
        const userName = form.name.value;
        const photoURL = form.photoURL.value;

        const touristSpots = { spotName, countryName, location, description, average, seasonality, travel, totalVisitors, email, userName, photoURL };
        console.log(touristSpots);

        fetch('http://localhost:5000/spot', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(touristSpots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spots added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })

    }


    return (
        <div>
            <Helmet>
                <title>Add Touris Spot | GoromerAdventure</title>
            </Helmet>
            <div className="bg-[#F4F3F0] p-4 md:p-24 mb-20">
                <h2 className="text-3xl font-extrabold text-center pb-5">Add your tourist spots</h2>
                <form onSubmit={handleAddTouristSpot}>
                    {/* form name and quantity row */}
                    <div className="flex mb-8">
                        <div className=" md:w-1/2 mr-4">
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
                                <input type="text" name="spotName" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
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
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Short Description :</span>
                                </div>
                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
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
                                <input type="text" name="average" placeholder="Average Cost" className="input input-bordered w-full" />
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
                                <input type="text" name="travel" placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text"> Total visitors per year :</span>
                                </div>
                                <input type="text" name="totalVisitors" placeholder="Total Visitors per year" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="w-full mb-8">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">PhotoURL :</span>
                            </div>
                            <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="flex mb-8">
                        <div className="md:w-1/2">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text"> User email :</span>
                                </div>
                                <input type="text" name="email" defaultValue={user.email} placeholder="User email" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="md:w-1/2 ml-4">
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text"> User name :</span>
                                </div>
                                <input type="text" name="name" defaultValue={user.displayName} placeholder="User name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Spots" className="p-3 text-white rounded-lg bg-[#7AA93C] w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddTourist;