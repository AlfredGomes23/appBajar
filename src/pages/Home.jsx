import { Suspense } from "react";
import Banner from "../components/Banner";
import HomeStats from "../components/HomeStats";
import TrendingApps from "../components/TrendingApps";

const allAppsPromise = fetch('/Data.json').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeStats/>
            <Suspense fallback={<p className="loading loading-bars loading-xl text-[#632ee3] text-center mx-auto"></p>}>
                <TrendingApps allAppsPromise={allAppsPromise}/>
            </Suspense>
        </div>
    );
};

export default Home;