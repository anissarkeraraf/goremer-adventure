import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
// import TouristSpots from "../touristSpots/TouristSpots";


const Home = () => {
    const use = useLoaderData();
    console.log(use)
    return (
        <div className="w-11/12 mx-auto">
           <Header></Header>
           {/* <TouristSpots></TouristSpots> */}
        </div>
    );
};

export default Home;