import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-[#F9FAFB] overflow-hidden">

            <div className="absolute inset-0" style={{
                    backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/048/421/325/non_2x/concept-of-no-items-found-no-results-found-user-request-page-not-found-error-notification-404-web-and-mobile-application-symbols-illustration-in-the-background-vector.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}/>

            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

            <div className="relative z-10 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className='flex flex-wrap justify-center items-center gap-2 md:gap-4 text-3xl md:text-6xl font-black bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-6'>
                        <span>OPPS</span>
                        <span className='animate-bounce bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-6'>! ! !</span>
                        <span className="whitespace-nowrap">App Not Found</span>
                    </h2>

                    <p className='text-[#627382] font-medium text-lg md:text-xl mb-10'>
                        The App you are requesting is not found on our system. <br /> Please try another app.
                    </p>

                    <Link to='/' className="btn mx-auto border-0 outline-0 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold text-base">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default AppNotFound;