import Swal from "sweetalert2";


const AddTourist = () => {

    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const average = form.average.value;
        const seasonality = form.seasonality.value;
        const travel = form.travel.value;
        const totalVisitors = form.totalVisitors.value;
        const email = form.email.value;
        const userName = form.name.value;
        const photoURL = form.photoURL.value;

        const touristSpots = { spotName, countryName, location, description, average, seasonality, travel, totalVisitors, email, userName, photoURL };
        console.log(touristSpots);

        fetch('http://localhost:5000/spot', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(touristSpots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist Spots added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }


    return (
        <div className="bg-[#F4F3F0] p-24 mb-20">
            <h2 className="text-3xl font-extrabold text-center pb-5">Add your tourist spots</h2>
            <form onSubmit={handleAddTouristSpot}>
                {/* form name and quantity row */}
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Tourists Spot Name :</span>
                            </div>
                            <input type="text" name="spotName" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Country Name :</span>
                            </div>
                            <input type="text" name="countryName" placeholder="Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Supplier and Taste row */}
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Location :</span>
                            </div>
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Short Description :</span>
                            </div>
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Average Cost :</span>
                            </div>
                            <input type="text" name="average" placeholder="Average Cost" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Seasonality :</span>
                            </div>
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Travel Time :</span>
                            </div>
                            <input type="text" name="travel" placeholder="Travel Time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> Total visitors per year :</span>
                            </div>
                            <input type="text" name="totalVisitors" placeholder="Total Visitors per year" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div className="md:w-1/2">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> User email :</span>
                            </div>
                            <input type="text" name="email" placeholder="User email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text"> User name :</span>
                            </div>
                            <input type="text" name="name" placeholder="User name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="w-full mb-8">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">PhotoURL :</span>
                        </div>
                        <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Spots" className="btn bg-[#7AA93C] w-full" />
            </form>
        </div>
    );
};

export default AddTourist;