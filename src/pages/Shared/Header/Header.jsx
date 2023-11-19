import Logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='flex justify-center items-center py-5'>
            <div className='space-y-5 '>
                <img src={Logo} alt="" />
                <p className='text-[#706F6F] text-center'>Journalism Without Fear or Favour</p>
                <p className='text-[#706F6F] text-center'>{moment().format("dddd, MMMM D ,YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;