import logo from '../assets/images/logo.png';

const Loading = () => {
    return (
        <h1 className='text-5xl font-bold flex justify-center items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent my-10 mx-auto text-center'>L 
            <img className='w-10 animate-spin' src={logo} /> ad <span className='animate-bounce text-[#9f62f3]'>i</span> ng <span className="loading loading-dots loading-xl text-[#9f62f2] rotate-180 animate-bounce"></span>
                </h1>
    );
};

export default Loading;