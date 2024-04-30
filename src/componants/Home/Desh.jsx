
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Desh = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [countries])

    return (
        <div>
            <h2 className='text-5xl text-center mt-10 font-roboto font-medium'>Countires</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-16'>
                {
                    countries.slice(0, 6).map(country => (
                        <Link to={`/subcategory/${country.countryName}`}>
                            <div className="card card-compact h-[350px] bg-base-100 shadow-xl">
                                <figure><img className='w-[400px] h-[200px]' src={country.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title hover:text-blue-300 duration-500">{country.countryName}</h2>
                                    <p>{country.description}</p>

                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Desh;