import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub ,FaFacebookF ,FaTwitter ,FaInstagram} from "react-icons/fa";
import qZone1 from"../../../assets/qZone1.png"
import qZone2 from"../../../assets/qZone2.png"
import qZone3 from"../../../assets/qZone3.png"



const RightSideNav = () => {
    return (
        <div>
            <div className='p-3'>
                <div>
                    <div className='space-y-5 mb-6'>
                        <h1 className='text-[#403F3F] text-2xl font-bold font-Merriweather'>Login Width</h1>
                        <button className='flex justify-center items-center gap-3 w-full text-sky-600 text-[18px] font-semibold py-3 px-8 border-2 rounded-lg border-sky-500	 '> <FcGoogle></FcGoogle> Login Width Google</button>
                        <button className='flex justify-center items-center gap-3 w-full text-black text-[18px] font-semibold py-3 px-8 border-2 rounded-lg border-black	 '> <FaGithub /> Login Width Github</button>
                    </div>
                    <div className=' mb-6'>
                        <h1 className='text-[#403F3F] text-2xl font-bold font-Merriweather'>Find Us On</h1>
                        <a href='#' className='flex items-center  gap-3 w-full text-[#706F6F] text-[18px] font-semibold py-3 px-8 border-2 rounded-t-lg border-[#E7E7E7]'><FaFacebookF className='text-[#3B599C]' />Facebook</a>
                        <a href='#' className='flex items-center  gap-3 w-full text-[#706F6F]  text-[18px] font-semibold py-3 px-8 border-2  border-[#E7E7E7]'> <FaTwitter className='text-[#58A7DE]' />
                            Twitter</a>
                        <a href='#' className='flex items-center  gap-3 w-full text-[#706F6F] text-[18px] font-semibold py-3 px-8 border-2 rounded-b-lg border-[#E7E7E7]'>< FaInstagram className='text-yellow-500' />
                            Instagram</a>
                    </div>
                    {/* {QuZone} */}
                    <div className='space-y-5 mb-6 bg-[#F3F3F3] p-3'>
                        <h1 className='text-[#403F3F] text-2xl font-bold font-Merriweather'>Q-Zone</h1>
                       <div> <img className='w-full' src={qZone1} alt="" /></div>
                       <div> <img className='w-full' src={qZone2} alt="" /></div>
                       <div> <img className='w-full' src={qZone3} alt="" /></div>
                    </div>

                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
};

export default RightSideNav;