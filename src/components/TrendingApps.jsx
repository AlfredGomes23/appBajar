import { use } from "react";
import { Link } from "react-router";
import TrendingCard from "./TrendingCard";


const TrendingApps = ({ allAppsPromise }) => {
    const allAppsData = use(allAppsPromise);
    console.log(allAppsData);
    return (
        <div className="text-center pt-20 pb-10">
            <h3 className="text-5xl text-[#001931] font-bold">Trending Apps</h3>
            <p className="text-base text-[#627382] mt-4 mb-8">Explore All Trending Apps on the Market developed by us</p>

            <div className="grid grid-cols-1 md:grid-cols-4 space-y-4 mx-auto">
                {
                    allAppsData.sort((a, b) =>
                        (a.ratings["4 star"] + a.ratings["4 star"]) -
                        (b.ratings["4 star"] + b.ratings["4 star"])).slice(0,8).map(app => 
                            <TrendingCard key={app.id} app={app}/>
                        )
                }
            </div>
            <Link to='/apps' className="btn mx-auto bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold text-base mt-6">Show All</Link>
        </div>
    );
};

export default TrendingApps;