import logo from '../assets/images/logo.png';
import { FaArrowCircleUp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router';

const Footer = () => {

    return (
        <footer className=" bg-white pt-6">
            <section className="flex flex-col md:flex-row justify-around lg:gap-10 px-5 lg:px-10 space-y-3">
                <div className=" md:flex-1">
                    <a className="text-xl font-bold flex items-center justify-center">
                        <img src={logo} alt="logo" className='w-10' />
                        AppBajar</a>
                    <p className='text-[#627382] text-center w-72 mx-auto'>Explore. Install. Innovate.</p>
                    <p className='text-[#627382] text-center w-72 mx-auto'>We deliver the latest software solutions developed with precision and care.</p>
                </div>
                <div className="flex mx-auto justify-around gap-10 md:flex-1">

                    <div>
                        <h4 className="text-center font-bold">Company</h4>
                        <ul className="flex flex-col justify-center items-center gap-1 mt-3 link">
                            <li><NavLink to='/' className="font-medium text-base">Home</NavLink></li>
                            <li><NavLink to='/apps' className="font-medium text-base">Apps</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-center font-bold">Services</h4>
                        <ul className="flex flex-col justify-center items-center gap-1 mt-3 link">
                            <li><NavLink to='/installation' className="font-medium text-base">Installation</NavLink></li>
                            <li><a href="/">Support Center</a></li>
                        </ul>
                    </div>
                </div>

                <div className=" md:flex-1">
                    <h4 className="text-center font-bold">Contact US</h4>
                    <ul className="flex flex-col justify-center items-center gap-1 mt-3">

                        <li><a className='flex justify-center items-center gap-1 bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent' href="/"><FaFacebookF className='text-[#632ee3]' />AppBajar</a></li>
                        <li><a className='flex justify-center items-center gap-1 bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent' href="/"><FaLinkedinIn className='text-[#632ee3]' />app-bajar</a></li>
                        <li>
                            <label className="floating-label">
                                <span>Your Email</span>
                                <div className='join items-center'>
                                    <input type="text" placeholder="Your-Email@example.com" className="input input-md border rounded-l-lg outline-0 join-item w-50 h-6" />
                                    <BsArrowRightSquareFill className="join-item rounded-r-lg text-2xl text-[#632EE3]" />
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="footer sm:footer-horizontal footer-center text-base-content p-4">
                <aside className='flex justify-center items-center'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-xl font-bold text-[#632EE3]">AppBajar</span></p>
                </aside>
            </section>
            <a href="#navbar" className="fixed bottom-8 right-5 z-50 bg-white rounded-full hover:shadow-xl animate-pulse outline outline-white">
                <FaArrowCircleUp className="text-3xl text-[#632EE3] font-bold" />
            </a>
        </footer>
    );
};

export default Footer;