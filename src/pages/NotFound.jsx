import { Link } from "react-router";
import error404 from '../assets/images/error-404.png'


const NotFound = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-[#F9FAFB] overflow-hidden">

            <div className="absolute inset-0" style={{
                backgroundImage: `url(${error404})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
            }} />

            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

            <div className="relative z-10 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className='flex flex-wrap justify-center items-center gap-2 md:gap-4 text-3xl md:text-6xl font-black bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-6'>
                        <span>oH, No</span>
                        <span className='animate-bounce bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>! ! !</span>
                    </h2>
                    <h3 className='flex flex-wrap justify-center items-center gap-2 md:gap-4 text-3xl md:text-6xl font-black bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-6'>Page nOt found.</h3>

                    <p className='text-[#627382] font-medium text-lg md:text-xl mb-10'>
                        The page you are looking for is not available.
                    </p>

                    <Link to='/' className="btn mx-auto border-0 outline-0 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold text-base mt-6">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;