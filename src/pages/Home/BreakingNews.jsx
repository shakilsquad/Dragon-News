import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='py-2 pr-6 my-5 bg-[#F3F3F3] text-black font-semibold'>
            <dir className='flex gap-3 '>
                <button className='py-3 px-7 font-bold text-white bg-[#D72050] '>Latest</button>
                <Marquee pauseOnHover={true} className='cursor-pointer'>
                    <Link to={'/'}><p className='mr-6'>I can be a React component, multiple React components, or just some text........</p></Link>
                    <br />
                    <Link to={'/'}><p className='mr-6'>I can be a React component, multiple React components, or just some text........</p></Link>
                </Marquee>

            </dir>
        </div>
    );
};

export default BreakingNews;