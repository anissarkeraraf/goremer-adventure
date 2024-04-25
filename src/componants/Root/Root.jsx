
import { Outlet } from 'react-router-dom';
import Navber from '../navber/Navber';

const Root = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;