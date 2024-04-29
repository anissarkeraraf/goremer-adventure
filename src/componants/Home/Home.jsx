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
                    <h2 className="text-4xl text-center font-bold opacity-80"> Tourists Spots</h2>
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
                    <p className="text-center font-mansalva text-[#1DC5CE] text-3xl mb-4">Take yourself</p>
                    <h2 className="text-4xl font-medium text-center mb-5">Adventure Ideas</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {adventure.map(ad => (
                        <div className=" mt-20 mx-auto">
                            <img className="w-[200px] h-[200px] rounded-full" src={ad.imgUrl} alt="Shoes" />
                            <div className=" text-center">
                                <h2 className="text-center text-2xl font-bold mt-5">{ad.name}</h2>
                                <p className="w-[200px] mx-auto mt-5">{ad.description}</p>
                                <div className="mt-5 justify-center">
                                    <button className="p-3 rounded text-white bg-[#10221B]">Enquire</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#FFF5F1]">
                <p className="font-mansalva">Most wanted Q & A</p>
                <h2>Frequently Asked Questions</h2>
            </div>
        </div>
    );
};

export default Home;