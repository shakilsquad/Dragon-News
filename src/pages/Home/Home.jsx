import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navber/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';



const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div  className='h-screen overflow-y-scroll'>
                    <div className=''>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </div>
                <div className='md:col-span-2 h-screen overflow-y-scroll'>
                    <div className=''>
                        <h1 className='text-[#403F3F] text-2xl font-bold font-Merriweather'>Dragon News Home</h1>
                        {
                            news.map(aNews => <NewsCart
                            key={aNews._id}
                            news={aNews}
                            ></NewsCart>)
                        }

                    </div>
                </div>
                <div >
                    <div className=' h-screen overflow-y-scroll'>
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;