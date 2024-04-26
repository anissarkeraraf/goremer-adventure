import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    const tourist = useLoaderData();
    // console.log(use)
    const { spotName, countryName, location, description, average, seasonality, photoURL } = tourist
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <div>
                <h2 className="text-4xl"> Tourists Spots Section</h2>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;