import { Suspense } from "react";
import Banner from "../components/Banner";
import HomeStats from "../components/HomeStats";
import TrendingApps from "../components/TrendingApps";
import Loading from "../components/Loading";

const allAppsPromise = fetch('/Data.json').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeStats/>
            <Suspense fallback={<Loading/>}>
                <TrendingApps allAppsPromise={allAppsPromise}/>
            </Suspense>
        </div>
    );
};

export default Home;