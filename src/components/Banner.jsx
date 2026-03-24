// import app1 from '../assets/images/demo-app (1).webp'
// import app2 from '../assets/images/demo-app (2).webp'
// import app3 from '../assets/images/demo-app (3).webp'
// import app4 from '../assets/images/demo-app (4).webp'
// import app5 from '../assets/images/demo-app (5).webp'
// import app6 from '../assets/images/demo-app (6).webp'
import hero from '../assets/images/hero.png'
import playIcon from '../assets/images/playIcon.png'
import AppStoreIcon from '../assets/images/AppStoreIcon.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='py-10'>
            <div className='w-2/3 mx-auto text-center space-y-4'>
                <h2 className='text-6xl text-[#001931] font-bold text-center'>We Build
                    <br /><span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Robotics</span> Apps</h2>

                <p className='text-md text-[#627382]'>At AppBajar, we craft innovative apps designed to make creative life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into Real-life Device that truly make an impact.</p>
                <div className='text-[20px] font-semibold flex gap-4 justify-center'>
                    <Link to="https://play.google.com/store/games?hl=en"  target="_blank"  className='btn '> <img src={playIcon} alt="" className='w-6' />Google Play</Link>
                    <Link to="https://www.apple.com/app-store/"  target="_blank"  className='btn '> <img src={AppStoreIcon} alt="" className='w-6' />App Store</Link>
                </div>
            </div>
            <div>
                <img src={hero} alt="hero" className='w-2/3 md:w-1/2 mx-auto pt-10' />
            </div>
        </div>
    );
};

export default Banner;