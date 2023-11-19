import React from 'react';
import { TiEye } from "react-icons/ti";
import { FaShareNodes } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';






const NewsCart = ({ news }) => {
    const { _id,image_url,title, details, total_view, author,rating } = news;
    const { img, name, published_date, } = author;
    const {number} = rating;
    return (
        <div className='mb-4'>
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
                <div className='p-6 bg-[#F3F3F3]'>
                    <div className=' flex items-center justify-between'>
                        <div className='flex items-center justify-around gap-2'>
                            <div>
                                <img className='w-[40px] rounded-full' src={img} alt="" />
                            </div>
                            <div>
                                <h1>{name}</h1>
                                <p>{published_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-xl'>
                            <CiBookmark />
                            <FaShareNodes />
                        </div>
                    </div>
                </div>
                <div className='p-6'>
                    <p class="block font-sans text-[25px] antialiased font-bold leading-relaxed text-blue-gray-900">
                        {title}
                    </p>
                </div>
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={image_url}
                        class="object-cover w-full h-full"
                    />
                </div>
                <div class="p-6">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {
                            details.length > 210
                            ? <p>{details.slice(0,210)} <Link
                            to={`/news/${_id}`}
                            className='text-red-600 font-extrabold'>Read More...</Link></p>
                            : <p>{details}</p>
                        }
                    </p>
                    <hr className=' my-7' />
                    <div class="flex  items-center justify-between mb-2">
                        <p class="flex  items-center ml-1  space-x-1 font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        {number}

                        </p>
                        <p class="flex items-center gap-1  font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            <TiEye /> {total_view}
                        </p>
                    </div>

                </div>
                <div class="p-6 pt-0">
                </div>
            </div>
        </div>
    );
};

export default NewsCart;