import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TrendingCard = ({app}) => {
    const { id, image, downloads, title, ratingAvg} = app;
    console.log(ratingAvg);
    const formatToMillions = n => n >= 1e6 ? (n / 1e6).toFixed(n % 1e6 ? 1 : 0) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1) + 'K' : n.toString();
    return (
        <Link to={`/app/${id}`} className="card bg-base-100 w-75 md:w-86 shadow-sm hover:shadow-xl mx-auto">
            <figure className="p-4">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="px-4 pb-4">
                <h2 className="card-title text-3 md:text-[20px] font-lg">{title}</h2>
                <div className="card-actions w-full text-base font-medium justify-between flex">
                    <span className='text-[#00D390] flex justify-center items-center gap-1 bg-[#F1F5E8] px-2 py-1 rounded-sm'><FaDownload />{formatToMillions(downloads)}</span>
                    <span className='text-[#FF8811] flex justify-center items-center gap-1 bg-[#FFF0E1] px-2 py-1 rounded-sm'><FaStar />{ratingAvg}</span>
                </div>
            </div>
        </Link>
    );
};

export default TrendingCard;