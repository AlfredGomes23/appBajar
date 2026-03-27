import { use, useEffect, useState } from "react";
import logo from '../assets/images/logo.png';
import { getInstalledAppIds, uninstallApp } from "../utils/localStorage";
import InstalledAppCard from "../components/InstalledAppCard";

const Installation = ({ allAppsPromise }) => {
    const allAppsData = use(allAppsPromise);

    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("Default");

    useEffect(() => {
        const installedIds = getInstalledAppIds();
        let filtered = allAppsData.filter(app => installedIds.includes(String(app.id)));

        switch (sortBy) {
            case "Alphabetical A-Z":
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Downloaded - High":
                filtered.sort((a, b) => b.downloads - a.downloads);
                break;
            case "Downloaded - Low":
                filtered.sort((a, b) => a.downloads - b.downloads);
                break;
            case "Rating - High":
                filtered.sort((a, b) => b.ratingAvg - a.ratingAvg);
                break;
            case "Rating - Low":
                filtered.sort((a, b) => b.ratingAvg - a.ratingAvg);
                break;
            default:
                filtered.sort((a, b) => a.id - b.id);
                break;
        };
        setInstalledApps([...filtered]);

    }, [sortBy, allAppsData]);


    const removeApp = id => {
        uninstallApp(id)
        setInstalledApps(prevApps => prevApps.filter(app => String(app.id) !== String(id)));
    };


    return (
        <div className="text-center pt-20 pb-10">

            <h3 className="text-4xl md:text-5xl text-[#001931] font-bold">Your Installed Apps</h3>

            <p className="text-base text-[#627382] mt-4 mb-8">Explore All Trending Apps on the Market developed by us</p>

            <div className="flex flex-col  md:flex-row gap-3 md:justify-between py-5 px-10 text-[#001931] font-semibold text-[20px]">
                <h3 className="">{installedApps.length} Apps Found</h3>

                <select defaultValue="Default"
                    className="select w-50 bg-base-100 border-0 outline-0 text-[#627382] mx-auto md:mx-0"
                    onChange={(e => setSortBy(e.target.value))}>
                    <option>Default</option>
                    <option>Alphabetical A-Z</option>
                    <option>Downloaded - High</option>
                    <option>Downloaded - Low</option>
                    <option>Rating - High</option>
                    <option>Rating - Low</option>
                </select>
            </div>
            {
                installedApps.length ?
                    <>

                        <div className="space-y-3 mx-auto md:px-10">
                            {
                                installedApps.map(app =>
                                    <InstalledAppCard key={app.id} app={app} removeApp={removeApp} />
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