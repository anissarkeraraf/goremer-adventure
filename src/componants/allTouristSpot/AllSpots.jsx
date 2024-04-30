// import { FaEye } from "react-icons/fa";
// import { GrUpdate } from "react-icons/gr";
// import { MdDelete } from "react-icons/md";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const AllSpots = ({ spot }) => {
    const { spotName, _id, countryName, location, description, average, seasonality, travel, totalVisitors, email, userName, photoURL } = spot;
    return (
        <div>
            <Helmet>
                <title>All Tourist Spot | GoromerAdventure</title>
            </Helmet>
            <div className="card glass p-5">
                <figure><img className="h-[220px] w-[500px] hover:translate z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" src={photoURL} alt="car!" /></figure>

                <h2 className="card-title opacity-70 text-[#acb733]">{spotName}</h2>
                <p className="font-bold opacity-50">Average Cost : {average}$ /<small className="opacity-60">Per Person</small></p>
                <p className="font-bold mt-2">Visitors Per year : {totalVisitors} <span></span></p>
                <div className="grid grid-cols-2 gap-5 mt-2">
                    <p>Travel Time : {travel} /<small>days</small></p>
                    <p>seasonality : {seasonality}</p>
                </div>

                <div className="flex justify-between mt-4">
                    <Link to={`/spot/${_id}`} className="btn-outline bg-[#33b249] w-full hover:bg-[#5adbb5] hover:text-black duration-500 p-3 rounded text-white">
                        <span className="pl-[100px]"> View Details</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AllSpots;