import { Helmet } from "react-helmet-async";
import { FaCar, FaMoneyBillAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const detail = details.find(detail => detail._id === id)
    console.log(detail);

    const { spotName, _id, countryName, location, description, average, seasonality, travel, totalVisitors, email, userName, photoURL } = detail;

    return (
        <div>
            <Helmet>
                <title>Detail Of {spotName} | GoromerAdventure</title>
            </Helmet>
            <div className="bg-[#A5A5A5] w-full bg-opacity-50 mb-10 mt-10">
                <h2 className="text-4xl text-center py-5 font-bold">Details of tourist spot : <span className="text-[#C53701] opacity-70">{spotName}</span></h2>
                <div className="grid grid-cols-2 divide-x">
                    <div className="">
                        <img className="rounded-xl p-10" src={photoURL} alt="" />
                    </div>

                    <div className="p-10">
                        <p className="font-bold text-3xl opacity-80 mb-5">CuntryName : <span>{countryName}</span></p>
                        <p className="flex mb-5"><span className="text-2xl font-bold opacity-80">Seasonality : </span><span className="text-xl items-center ml-5">{seasonality}</span></p>

                        <p className="mb-5"><span className="text-2xl font-bold opacity-80">Travel time : </span> <span className="text-xl">{travel}</span>/<small>days</small></p>

                        <p className="mb-5"><span className="text-2xl font-bold opacity-80">Total visitor : </span> <span className="text-xl">{totalVisitors}</span>/<small>per year</small></p>

                        <p className="flex mb-5"><FaLocationDot className="text-2xl mr-2"></FaLocationDot>
                            <span className="text-xl">{location}</span></p>


                        <p className="flex items-center mb-5"><FaMoneyBillAlt className="text-2xl mr-2"></FaMoneyBillAlt>
                            <span className="text-xl">{average}$ /<small>per person</small></span></p>

                        <p><span className="font-bold text-2xl opacity-80">Description : </span><span className="text-xl">{description}</span></p>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;