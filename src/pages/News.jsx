import React, { useEffect, useState } from 'react';
import Header from './Shared/Header/Header';
import Navbar from './Shared/Navber/Navbar';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const News = () => {

    const { id } = useParams()
    const [newsItem, setNewsItem] = useState([])
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNewsItem(data))
    }, [])

    const newsItems = newsItem.find(news => news._id === id)

    console.log(newsItems?.title)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 gap-6'>
                <div className='col-span-3 '>
                    <div className='space-y-3 border rounded-lg p-4'>
                        <h1 className='text-3xl font-bold'>Dragon news Details</h1>
                        <div><img className='w-full' src={newsItems?.image_url} alt="" /></div>
                        <div className='py-3'>
                            <p class="block font-sans text-[25px] antialiased font-bold leading-relaxed text-blue-gray-900">
                                {newsItems?.title}
                            </p>
                        </div>
                        <div><p className='text-[#706F6F]'>{newsItems?.details}</p></div>
                        <div>
                            <button className=' py-3 px-8 bg-[#D72050] text-white' ><Link className='flex items-center gap-3' to={'/'}>
                            <FaArrowLeft />
                            All news in this category</Link></button>
                        </div>
                    </div>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;