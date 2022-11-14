import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { contextProvider } from '../../Context/Context';
const Header = () => {
    const { user, logOut } = useContext(contextProvider)

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
                            user ? <li tabIndex={0}>
                                <Link to="/signin" onClick={signOut}>
                                    Sign-Out
                                </Link>
                            </li>
                                :
                                <li tabIndex={0}>
                                    <Link to="/signin">
                                        Sign-in
                                    </Link>
                                </li>
                        }

                        <li tabIndex={0}>
                            <Link to="/signin">
                                <img src={user?.photoURL} alt="" className='w-12 h-12 rounded-full' />
                                {user?.displayName}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;