import { Helmet } from "react-helmet-async";
import { GiSundial } from "react-icons/gi";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="carousel w-full rounded-lg mt-10">
            <Helmet>
                <title>Home | GoromerAdventure</title>
            </Helmet>
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/82HTLpc/345053324.jpg" className="w-full lg:h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="text-4xl text-white">❮</a>
                    <a href="#slide2" className="text-4xl text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/QnmQqr0/16-surprising-facts-about-phi-phi-islands-1694593659.jpg" className="w-full lg:h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-4xl text-white">❮</a>
                    <a href="#slide3" className="text-4xl text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/wR6HCy2/hn-I9yf1-oyv9enlwzsjzqytnos4159sj8k8i6ovad2b4l06irs.jpg" className="w-full lg:h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-4xl text-white">❮</a>
                    <a href="#slide4" className="text-4xl text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/rMhQnd0/Hoian.webp" className="w-full lg:h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="text-4xl text-white">❮</a>
                    <a href="#slide1" className="text-4xl text-white">❯</a>
                </div>
            </div>
            <div className="absolute rounded-xl bg-white opacity-70 left-[90px] md:left-[135px] lg:left-[350px] mt-[90px] md:mt-0 lg:mt-0 md:bottom-[50px] lg:bottom-[100px] p-2 md:p-4 lg:p-4">
                <h2 className="text-black font-satisfy text-2xl md:text-5xl lg:text-6xl space-x-2 text-center mb-2">Discover the</h2>
                <h2 className="text-black md:text-5xl text-2xl lg:text-6xl space-x-4 mb-2">GOROMER ADVENTURE</h2>
                <h2 className="text-black text-center mb-2">Your best Adventure Deals with nature.</h2>
                <div className="flex justify-center item-center">
                    <Link to='/touristSpot'>
                        <button className="bg-black text-white p-3 rounded">Explore Now</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Header;