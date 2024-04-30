import { useLoaderData } from "react-router-dom";
import Spots from "./Spots";


const Subcategory = () => {

    const subCategories = useLoaderData();
   

    return (
        <div>
            <h2>Sub Category section</h2>
            {
                subCategories.map(sub => <Spots key={sub.id} sub={sub}></Spots> )
            }
        </div>
    );
};

export default Subcategory;