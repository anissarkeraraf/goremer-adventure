import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TourSpots from "../tourSpots/TourSpots";


const Home = () => {
    const tourist = useLoaderData();
    console.log(tourist)
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <div>
                <div className=" my-10">
                    <h2 className="text-4xl text-center font-bold opacity-80"> Tourists Spots Section</h2>
                    <p className="text-center w-[450px] mx-auto mt-5 font-medium opaci75">Some famous places are mentioned in this section . You can see the details of these if you want , thanks</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        tourist.slice(0, 6).map(tour => <TourSpots key={tourist._id} tour={tour}></TourSpots>)
                    }
                </div>
            </div>
            <div className="my-20">
                <h2 className="text-4xl text-center">Most Popular Tour</h2>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;