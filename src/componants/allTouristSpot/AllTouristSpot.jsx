import { useLoaderData } from "react-router-dom";
import AllSpots from "./AllSpots";


const AllTouristSpot = () => {
    const spots = useLoaderData();
    // const { spotName, countryName, location, description, average, seasonality, travel, totalVisitors, email, userName, photoURL } = spots;
    return (
        <div className="w-11/12 mx-auto mb-10">
            <h2 className="text-4xl text-center mt-10 mb-5 font-bold"> Southeast Asia Tourist Spot</h2>
            <p className="text-center w-[600px] mx-auto mb-10">Southeast Asia is a popular tourist destination renowned for its stunning landmarks, historical sites, and natural wonders. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    spots.map(spot => <AllSpots key={spot._id} spot={spot}></AllSpots>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;