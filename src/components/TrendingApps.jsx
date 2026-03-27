import { use } from "react";
import { Link } from "react-router";
import AppCard from "./AppCard";


const TrendingApps = ({ allAppsPromise }) => {
    const allAppsData = use(allAppsPromise);

    return (
        <div className="text-center pt-20 pb-10">
            <h3 className="text-4xl md:text-5xl text-[#001931] font-bold">Trending Apps</h3>

            <p className="text-base text-[#627382] mt-4 mb-8">Explore All Trending Apps on the Market developed by us</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10 mx-auto">
                {
                    allAppsData.sort((a, b) =>
                        (b.ratingAvg * b.reviews) - (a.ratingAvg * a.reviews)).slice(0, 8).map(app =>
                            <AppCard key={app.id} app={app} />
                        )
                }
            </div>
            <Link to='/apps' className="btn mx-auto border-0 outline-0 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold text-base mt-6">Show All</Link>
        </div>
    );
};

export default TrendingApps;