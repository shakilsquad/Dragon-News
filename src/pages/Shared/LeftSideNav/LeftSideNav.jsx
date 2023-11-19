import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import sport1 from './/..//..//..//assets/1.png';
import sport2 from './/..//..//..//assets/2.png';
import sport3 from './/..//..//..//assets/3.png';
import { MdOutlineDateRange } from "react-icons/md";

const LeftSideNav = () => {

    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <div className='p-2 space-y-5'>
                <h1 className='text-[#403F3F] text-2xl font-bold font-Merriweather'>All Catagories</h1>
                {
                    // catagories.map(category => <NavLink

                    //     className='block ml-4 text-xl font-semibold text-[#9F9F9F]'
                    //     to={`/category/${category.id}`}
                    //     key={category.id}>
                    //     {category.name}
                    // </NavLink>)
                    catagories.map(category => <NavLink
                        to={`/category/${category.id}`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "block ml-4 text-xl font-semibold text-[#9F9F9F]"
                        }
                    >
                        {category.name}
                    </NavLink>)
                }
                <div>
                    <div className='space-y-4  mb-4'>
                        <img className='w-full' src={sport1} alt="" />
                        <h1 className='text-[22px] text-[#403F3F] font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className='flex items-center gap-3'>
                            <p className='text-[#403F3F] font-bold'>Sports</p>
                            <div className='flex items-center gap-3 text-[#9F9F9F]'>
                                <MdOutlineDateRange />
                                <p>Jan 4, 2022</p>

                            </div>
                        </div>
                    </div>
                    <div className='space-y-4  mb-4'>
                        <img className='w-full' src={sport2} alt="" />
                        <h1 className='text-[22px] text-[#403F3F] font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className='flex items-center gap-3'>
                            <p className='text-[#403F3F] font-bold'>Sports</p>
                            <div className='flex items-center gap-3 text-[#9F9F9F]'>
                                <MdOutlineDateRange />
                                <p>Jan 4, 2022</p>

                            </div>
                        </div>
                    </div>
                    <div className='space-y-4  mb-4'>
                        <img className='w-full' src={sport3} alt="" />
                        <h1 className='text-[22px] text-[#403F3F] font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className='flex items-center gap-3'>
                            <p className='text-[#403F3F] font-bold'>Sports</p>
                            <div className='flex items-center gap-3 text-[#9F9F9F]'>
                                <MdOutlineDateRange />
                                <p>Jan 4, 2022</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;