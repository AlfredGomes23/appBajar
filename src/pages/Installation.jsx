import { use, useState } from "react";
import AppCard from "../components/AppCard";
import logo from '../assets/images/logo.png';
import { getInstalledAppIds } from "../utils/localStorage";
import InstalledAppCard from "../components/InstalledAppCard";

const Installation = ({ allAppsPromise }) => {
    const allAppsData = use(allAppsPromise);
    const installedIds = getInstalledAppIds();

    const [installedApps, setInstalledApps] = useState([...allAppsData.filter(app => installedIds.includes(app.id))]);

    console.log(installedApps);

    const handleSortBy = e => {
        e.preventDefault();
        console.log(e.target.value);
    };

    return (
        <div className="text-center pt-20 pb-10">

            <h3 className="text-4xl md:text-5xl text-[#001931] font-bold">Your Installed Apps</h3>

            <p className="text-base text-[#627382] mt-4 mb-8">Explore All Trending Apps on the Market developed by us</p>

                        <div className="flex flex-col-reverse md:flex-row gap-3 justify-between py-5 px-10 text-[#001931] font-semibold text-[20px]">
                            <h3 className="">{installedApps.length} Apps Found</h3>

                            <select defaultValue="Default" className="select w-fit appearance-none bg-transparent border-[#627382] outline-0 text-[#627382]" onChange={handleSortBy}>
                                <option>Default</option>
                                <option>Alphabetical Order</option>
                                <option>Popularity</option>
                                <option>Rating</option>
                            </select>
                        </div>
            {
                installedApps.length ?
                    <>

                        <div className="space-y-3 mx-auto md:px-10">
                            {
                                installedApps.map(app =>
                                    <InstalledAppCard key={app.id} app={app} />
                                )
                            }
                        </div>
                    </>
                    : <h1 className='text-2xl font-bold flex justify-center items-center bg-linear-to-br from-[#e32e2e] to-[#9F62F2] bg-clip-text text-transparent my-10 mx-auto text-center whitespace-nowrap'>S
                        <img className='w-5 animate-spin' style={{ animationDuration: '1s' }} src={logo} />
                        rry, No Installed Apps F<img className='w-5 animate-ping rotate-20' src={logo} />und.
                    </h1>
            }
        </div>
    );
};

export default Installation;