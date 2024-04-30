import { useLoaderData } from "react-router-dom";
import Spots from "./Spots";
import { Helmet } from "react-helmet-async";


const Subcategory = () => {

    const subCategories = useLoaderData();


    return (
        <div>
            <Helmet>
                <title>SubCategory | GoremerAdventure</title>
            </Helmet>
            <h2 className="text-4xl font-roboto font-medium text-center mt-10 mb-10">Tourist Spots Of Specific</h2>
            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10">
                {
                    subCategories.map(sub => <Spots key={sub.id} sub={sub}></Spots>)
                }
            </div>
        </div>
    );
};

export default Subcategory;