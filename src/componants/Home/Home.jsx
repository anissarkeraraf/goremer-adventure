import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TourSpots from "../tourSpots/TourSpots";
import { useEffect, useState } from "react";
import Desh from "./Desh";



const Home = () => {
    const tourist = useLoaderData();
    // console.log(tourist)

    const [adventure, setAdventure] = useState([]);

    useEffect(() => {
        fetch('/adventure.json')
            .then(res => res.json())
            .then(data => {
                setAdventure(data)
            })
    }, [adventure])


    return (
        <div className="mb-10">
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
            <div className="mt-10 mx-auto">
                <Desh></Desh>
            </div>
            <div className="my-20 divide-y-2 m-10 mt-20">
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
                <div className="text-center pt-20">
                    <p className="font-satisfy text-[#EA604C] text-3xl pb-4">Most wanted Q & A</p>
                    <h2 className="font-roboto text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                </div>
                <div className="lg:w-10/12 mx-auto p-4 lg:p-10">
                    <div>
                        <div className="collapse bg-[#FFFFFF] mb-4">
                            <input type="radio" name="my-accordion-1" defaultChecked />
                            <div className="collapse-title text-xl font-medium font-playfair">
                                01. What are the best locations for wedding tours?
                            </div>
                            <div className="collapse-content font-playfair">
                                <p>Known for its stunning beaches, lush landscapes, and vibrant culture, Bali offers a tropical paradise for couples seeking a destination wedding surrounded by natural beauty and exotic charm.</p>
                            </div>
                        </div>
                        <div className="collapse bg-[#FFFFFF] mb-4">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium font-playfair">
                                02. Do you offer international packages?
                            </div>
                            <div className="collapse-content font-playfair">
                                <p>Yes, we provide our customers with different offers for different countries.  Especially for our regular customers there is always a package for this.  But don't worry, if you are the first to join our service, there will be a special discount for you.  And every year there is an offer</p>
                            </div>
                        </div>
                        <div className="collapse bg-[#FFFFFF] mb-4">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium font-playfair">
                                03. Can we customize your package with you?
                            </div>
                            <div className="collapse-content font-playfair">
                                <p>Yes, we allow customers to do this.  Customers can select the package of their choice and customize it again if they want, but they can't do it more than once.</p>
                            </div>
                        </div>
                        <div className="collapse bg-[#FFFFFF] mb-4">
                            <input type="radio" name="my-accordion-1" defaultChecked />
                            <div className="collapse-title text-xl font-medium font-playfair">
                                04. Why would we book our package?
                            </div>
                            <div className="collapse-content font-playfair">
                                <p>The advantages of package tours are that they are convenient. You don’t have to trouble yourself much about anything after signing up and paying for one, just get yourself to the airport on time and when you get off the plain keep an eye out for someone with a sign with your name on it.</p>
                            </div>
                        </div>
                        <div className="collapse bg-[#FFFFFF]">
                            <input type="radio" name="my-accordion-1" defaultChecked />
                            <div className="collapse-title text-xl font-medium font-playfair">
                                05. What’s it like your job, grab a backpack?
                            </div>
                            <div className="collapse-content font-playfair">
                                <p>You'll want to carry all your stuff in a professional (a.k.a., not flashy or inappropriate) backpack or briefcase—or, if you just have your resume, a folder or padfolio. The last thing you want is to be scrounging through your pockets for a pen or handing the hiring manager a crumpled-up resume.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;