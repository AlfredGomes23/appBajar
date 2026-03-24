

const HomeStats = () => {
    return (
        <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-center py-20">
            <h3 className="text-5xl font-bold">Trusted by Millions, Built for You</h3>
            <div className="flex flex-col md:flex-row justify-center py-10">
                <div>
                    <p className="text-sm">Total Downloads</p>
                    <p className="text-2xl md:text-6xl py-4 px-25 font-bold">29.6M</p>
                    <p className="text-sm">21% more than last month</p>
                </div>
                <div>
                    <p className="text-sm">Total Reviews</p>
                    <p className="text-2xl md:text-6xl py-4 px-25 font-bold">906K</p>
                    <p className="text-sm">46% more than last month</p>
                </div>
                <div>
                    <p className="text-sm">Active Apps</p>
                    <p className="text-2xl md:text-6xl py-4 px-25 font-bold">132+</p>
                    <p className="text-sm">31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default HomeStats;