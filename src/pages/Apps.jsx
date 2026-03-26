import { use, useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import logo from '../assets/images/logo.png';


const Apps = ({ allAppsPromise }) => {
    const allAppsData = use(allAppsPromise);
    const [apps, setApps] = useState([...allAppsData]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        search ?
            setApps([...allAppsData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))])
            : setApps([...allAppsData])
    }, [search])

    return (
        <div className="text-center pt-20 pb-10">

            <h3 className="text-4xl md:text-5xl text-[#001931] font-bold">Our All Applications</h3>

            <p className="text-base text-[#627382] mt-4 mb-8">Explore All Apps on the Market developed by us. We code for Millions</p>


            <div className="flex flex-col-reverse md:flex-row gap-3 justify-between py-5 px-10 text-[#001931] font-semibold text-[20px]">
                <h3 className="">({apps.length}) Apps Found</h3>

                <label className="input border outline-0">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" onChange={e => setSearch(e.target.value)} required placeholder="Search App" />
                </label>
            </div>            {
            apps.length ? 
            <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto md:px-10">
                {
                    apps.map(app =>
                        <AppCard key={app.id} app={app} />
                    )
                }
            </div>
            </>
            : <h1 className='text-2xl font-bold flex justify-center items-center bg-linear-to-br from-[#e32e2e] to-[#9F62F2] bg-clip-text text-transparent my-10 mx-auto text-center whitespace-nowrap'>S
                        <img className='w-5 animate-spin' style={{ animationDuration: '1s' }} src={logo} />
                        rry, No Apps F<img className='w-5 animate-ping rotate-20' src={logo} />und. 
                            </h1>
            }
        </div>
    );
};

export default Apps;