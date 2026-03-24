import { CiCircleChevUp } from "react-icons/ci";
import logo from '../assets/images/logo.png';
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-white pt-6">
            <section className="flex flex-col md:flex-row justify-around gap-10">
                <div>
                    <a className="text-xl font-bold flex items-center justify-center">
                        <img src={logo} alt="logo" className='w-10' />
                        AppBajar</a>
                </div>

                <div>
                    <h4 className="text-center font-bold">Company</h4>
                    <ul className="flex flex-col justify-center items-center gap-1 mt-3 link">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-center font-bold">Services</h4>
                    <ul className="flex flex-col justify-center items-center gap-1 mt-3 link">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-center font-bold">Contact US</h4>
                    <ul className="flex flex-col justify-center items-center gap-1 mt-3">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">About Us</a></li>                        
                        <li>
                            <label className="floating-label">
                            <span>Your Email</span>
                            <div className='join items-center'>
                                <input type="text" placeholder="Your-Email@example.com" className="input input-md border-0 outline-0 join-item w-50" />
                                <FaArrowRight className="join-item rounded-r-full text-2xl text-[#632EE3]"/>
                            </div>
                        </label>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="footer sm:footer-horizontal footer-center text-base-content p-4">
                <aside classname='flex justify-center items-center'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-xl font-bold text-[#632EE3]">AppBajar</span></p>
                </aside>
            </section>
            <a href="/#hero" className=''>
                <CiCircleChevUp className="text-2xl md:text-4xl text-[#632EE3] font-bold" /></a>
        </footer>
    );
};

export default Footer;