
import { Outlet } from 'react-router-dom';
import Navber from '../navber/Navber';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>

            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;