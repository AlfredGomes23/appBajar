import React from 'react';
import { formatToMillions, uninstallApp } from '../utils/localStorage';
import { FaDownload, FaStar } from 'react-icons/fa6';
import { IoTrashBin } from 'react-icons/io5';

const InstalledAppCard = ({ app }) => {
    const { id, image, title, downloads, ratingAvg, size } = app;
    return (
        <div className="list-row flex flex-col md:flex-row bg-white p-4 justify-between items-center rounded-md">
            <div className='flex gap-5'>
                <img className="size-10 md:size-16 rounded-box" src={image} />
                <div className="list-col-grow">
                    <div className='text-[20px] text-left font-medium'>{title}</div>
                    <div className="card-actions w-full text-base font-medium justify-around items-center md:gap-4 mt-2 flex">                                              <span className='text-[#00D390] flex    justify-center items-center gap-1'><FaDownload />{formatToMillions(downloads)}</span>
                        <span className='text-[#FF8811] flex justify-center items-center gap-1'><FaStar />{ratingAvg}</span>

                        <span className='text-[#627382] text-base font-normal'>{size} MB</span>
                    </div>
                </div>
            </div>
            <button onClick={()=> uninstallApp(id)} className="btn btn-sm bg-[#00d390] text-white mt-3 md:mt-0 w-2/3 md:w-fit">Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;