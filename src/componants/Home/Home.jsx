import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TourSpots from "../tourSpots/TourSpots";
import { useEffect, useState } from "react";


const Home = () => {
    const tourist = useLoaderData();
    console.log(tourist)

    const [adventure, setAdventure] = useState([]);

    useEffect(() => {
        fetch('/public/adventure.json')
            .then(res => res.json())
            .then(data => {
                setAdventure(data)
            })
    }, [adventure])


    return (
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto">
                <div className=" my-10">
                    <h2 className="text-4xl text-center font-bold opacity-80"> Tourists Spots Section</h2>
                    <p className="text-center w-[450px] mx-auto mt-5 font-medium opaci75">Some famous places are mentioned in this section . You can see the details of these if you want , thanks</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        tourist.slice(0, 6).map(spot => <TourSpots key={tourist._id} spot={spot}></TourSpots>)
                    }
                </div>
            </div>
            <div className="my-20 divide-y-2 m-10">
                <div>
                    <h2 className="text-4xl font-medium text-center mb-5">DESTINATION</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {adventure.map(ad => (
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={ad.imgUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;