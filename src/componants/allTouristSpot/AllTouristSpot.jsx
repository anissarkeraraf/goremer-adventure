import { useLoaderData } from "react-router-dom";
import AllSpots from "./AllSpots";


const AllTouristSpot = () => {
    const spots = useLoaderData();
    // const { spotName, countryName, location, description, average, seasonality, travel, totalVisitors, email, userName, photoURL } = spots;
    return (
        <div className="w-11/12 mx-auto mb-10">
            <h2 className="text-4xl">All tourist spot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    spots.map(spot => <AllSpots key={spot._id} spot={spot}></AllSpots>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;