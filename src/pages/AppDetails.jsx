import { use, useState } from "react";
import { FcDownload, FcLike, FcRating } from "react-icons/fc";
import { useParams } from "react-router";
import { formatToMillions, installApp, installed } from "../utils/localStorage";
import RatingBar from "../components/RatingBar";
import AppNotFound from "./AppNotFound";


const AppDetails = ({ allAppsPromise }) => {
    const { id } = useParams();
    const [isInstalled, setIsInstalled] = useState(installed(id));
    const allAppsData = use(allAppsPromise);
    const app = allAppsData.find(app => app.id + '' === id);

    // check for valid id
    if(!app) {return <AppNotFound/>}

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;



    return (
        <div className="p-10">
            <div className="flex flex-col md:flex-row gap-5">
                <img src={image} alt={title} className="md:size-40 lg:size-80" />
                <div className=" md:w-full flex flex-col md:block">
                    <div className="space-y-4">
                        <h2 className="font-bold text-3xl text-[#001931]">{title}</h2>
                        <p className="text-[#627382] text[20px] font-mono">Developed by
                            <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold ml-2">{companyName}</span>
                            </p>
                    </div>
                    <div className="divider"></div>
                    <div className="flex flex-col md:flex-row gap-6 my-7 mx-auto">
                        <div className="space-y-2 mx-auto md:mx-0 md:text-left text-center">
                            <FcDownload  className="mx-auto md:mx-0 text-4xl"/>
                            <p className="text-base text-[#001931]">Downloads</p>
                            <p className="text-4xl font-extrabold">{formatToMillions(downloads)}</p>
                            </div>
                        <div className="space-y-2 mx-auto md:mx-0 md:text-left text-center">
                            <FcRating  className="mx-auto md:mx-0 text-4xl"/>
                            <p className="text-base text-[#001931]">Average Rating</p>
                            <p className="text-4xl font-extrabold">{ratingAvg}</p>
                            </div>
                        <div className="space-y-2 mx-auto md:mx-0 md:text-left text-center">
                            <FcLike  className="mx-auto md:mx-0 text-4xl"/>
                            <p className="text-base text-[#001931]">Total Reviews</p>
                            <p className="text-4xl font-extrabold">{formatToMillions(reviews)}</p>
                        </div>
                    </div>
                    <button onClick={() => {
                        installApp(id);
                        setIsInstalled(true);
                    }} className="bg-[#00d390] btn btn-md lg:btn-lg text-white p-3.5 font-semibold rounded-sm text-[20px] md:text-center w-fit mx-auto md:mx-0 disabled:bg-[#a7d0c3]" disabled={isInstalled && true}>{isInstalled ? "Installed" : "Install Now"}  ({size} MB)</button>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <RatingBar ratings={ratings}/>
            </div>
            <div className="divider"></div>
            <div>
                <h2 className="font-semibold text-2xl text-[#001931] mb-6">Description</h2>
                <p className="text-[#627382] text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;