import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { contextProvider } from '../../Context/Context';
const Header = () => {
    const { user, logOut, header, setHeader } = useContext(contextProvider)

    const signOut = () => {
        logOut();
    }


    return (
        <div>
            <div className="navbar bg-gray-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <Link to="/service">
                                    Services
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <Link to="/blog">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl text-white">Wedding Photography </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <Link to="/service">
                                Services
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <Link to="/blog">
                                Blogs
                            </Link>
                        </li>
                        {
                            user ? <>
                                <li>
                                    <Link to="/reviews">
                                        My reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addService">
                                        Add service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signin" onClick={logOut}>
                                        Sign-out
                                    </Link>
                                </li>

                                <li tabIndex={0}>
                                    <Link>
                                        <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full object-cover' />
                                        {user?.displayName}
                                    </Link>
                                </li>
                            </>
                                :
                                <>
                                    <li tabIndex={0}>
                                        <Link to="/signin">
                                            Sign-in
                                        </Link>
                                    </li>
                                    <li tabIndex={0}>
                                        <Link to="/register">
                                            Register here
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/service' className="btn">Best services</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;