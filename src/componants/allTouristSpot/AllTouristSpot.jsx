import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpots from "./AllSpots";

const AllTouristSpot = () => {
    const spots = useLoaderData();
    const [sortBy, setSortBy] = useState(""); 

    const handleSort = (event) => {
        setSortBy(event.target.value);
    };

    const sortedSpots = [...spots].sort((a, b) => {
        if (sortBy === "ascending") {
            return a.average - b.average;
        }
        return 0;
    });

    return (
        <div className="w-11/12 mx-auto mb-10">
            <h2 className="text-4xl text-center mt-10 mb-5 font-bold">Southeast Asia Tourist Spot</h2>
            <p className="text-center w-[600px] mx-auto mb-10">Southeast Asia is a popular tourist destination renowned for its stunning landmarks, historical sites, and natural wonders.</p>
            <div className="mb-10 text-center">
                <select id="sort" className="bg-[#33B249] p-2 rounded" onChange={handleSort}>
                    <option className="bg-[#5ADBB5]" value="">Select</option>
                    <option className="bg-[#5ADBB5]" value="ascending">Average</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {sortedSpots.map(spot => <AllSpots key={spot._id} spot={spot}></AllSpots>)}
            </div>
        </div>
    );
};

export default AllTouristSpot;
