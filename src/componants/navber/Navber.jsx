import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {


    const { user, signOutUser } = useContext(AuthContext);


    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLink = <>
        <li className="ml-4"><NavLink to='/'
           style={({ isActive }) => {
            return isActive ? { color: "orange" } : {};
            }}
        >Home</NavLink></li>

        <li className="ml-4"><NavLink to='/touristSpot'
           style={({ isActive }) => {
            return isActive ? { color: "orange" } : {};
            }}
        > All Tourists Spot</NavLink></li>

        {
            user && <>
                <li className="ml-4"><NavLink to='/addTourist'
                   style={({ isActive }) => {
                    return isActive ? { color: "orange" } : {};
                    }}
                > Add Tourists Spot</NavLink></li>

                <li className="ml-4"><NavLink to='/myList'
                   style={({ isActive }) => {
                    return isActive ? { color: "orange" } : {};
                    }}
                >My List</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 md:w-11/12 lg:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">GoromKalerAdventure</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div tabIndex={0} role="button" className=" btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName || 'User name not found'}>
                        <div className="w-10 rounded-full border">
                            <img className="profile-img" alt="Profile" src={user.photoURL} />
                        </div>
                    </div>) : null
                }
                {
                    user ?
                        <button onClick={handleSignOut} className="pl-4 pr-4 pt-2 pb-2 rounded-lg bg-[#55c2da] text-black hover:bg-[#5783db] duration-500">Log Out</button>
                        :
                       <>
                        <Link to='/login'><button className="pl-4 pr-4 pt-2 pb-2 rounded-lg bg-[#55c2da] text-black hover:bg-[#5783db] duration-500 mr-4">Login</button></Link>
                        <Link to='/register'><button className="pl-4 pr-4 pt-2 pb-2 rounded-lg bg-[#55c2da] text-black hover:bg-[#5783db] duration-500">Register</button></Link>
                       </>
                }
            </div>
        </div>
    );
};

export default Navber;