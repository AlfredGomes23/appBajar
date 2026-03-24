import { NavLink } from 'react-router';
import logo from '../assets/images/logo.png';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className="font-medium text-base">Home</NavLink></li>
        <li><NavLink to='/apps' className="font-medium text-base">Apps</NavLink></li>
        <li><NavLink to='/installation' className="font-medium text-base">Installation</NavLink></li>
    </>;


    return (
        <nav className="navbar px-10 shadow-sm bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content   rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl flex justify-center items-center">
                    <img src={logo} alt="logo" className='w-10' />
                    AppBajar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn font-semibold text-base items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white">
                    <FaGithub  className='text-xl'/>
                    Contribute</a>
            </div>
        </nav>
    );
};

export default Navbar;