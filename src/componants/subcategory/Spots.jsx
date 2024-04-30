import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Spots = ({ sub }) => {

    const { spotName, _id, countryName, location, description, average, seasonality } = sub;

    return (
        <div className="card bg-base-100 shadow-xl pt-20 mb-20">
            <div className="card-body">
                <h2 className="text-4xl font-roboto font-medium">{spotName}</h2>
                <h2 className="text-2xl font-medium">{countryName}</h2>
                <div className='flex'>
                    <h2 className="flex items-center font-bold mr-10"><FaLocationDot className='mr-2 text-xl'></FaLocationDot> {location}</h2>
                    <h2 className="flex font-bold items-center"><FaMoneyBill className='mr-2 text-xl'></FaMoneyBill>{average}</h2>
                </div>
                <h2 className="font-bold"><span>Season : </span>{seasonality}</h2>
                <p className='text-xl font-medium'>{description}</p>
                <div className="">

                    <button className="w-full bg-[#33B249] p-3 rounded hover:bg-[#5ADBB5] duration-300">View Details</button>

                </div>
            </div>
        </div>
    );
};

export default Spots;