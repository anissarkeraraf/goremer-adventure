import { FaEye } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";


const TourSpots = ({ tour }) => {

    const { spotName, countryName, location, description, average, seasonality, travel, totalVisitors, email, userName, photoURL } = tour;


    return (
        <div className="card glass">
            <figure><img className="h-[220px] w-[500px] hover:translate z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" src={photoURL} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title opacity-70 text-[#acb733]">{spotName}</h2>
                <p className="font-bold opacity-50">Average Cost : {average}$ /<small className="opacity-60">Per Person</small></p>
                <p className="font-bold">Visitors Per year : {totalVisitors} <span></span></p>
                <div className="grid grid-cols-2 gap-5">
                    <p>Travel Time : {travel} /<small>days</small></p>
                    <p>seasonality : {seasonality}</p>
                </div>

                <div className="flex justify-between mt-5">
                    <button className="bg-[#BB792A] p-3 rounded-full text-white">View Details</button>
                    <button className="bg-[#BB792A] px-3 rounded-full text-white">Update</button>
                    <button className="bg-[#BB792A] px-3 rounded-full text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TourSpots;