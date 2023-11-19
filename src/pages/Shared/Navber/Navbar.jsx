import { useContext } from 'react';
import logoIcon from '../../../assets/user.png';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/Provider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }


    const navLink = <>
        <li> <NavLink to={'/'}>Home</NavLink> </li>
        <li> <NavLink to={'/about'}>About</NavLink> </li>
        <li> <NavLink to={'/career'}>Career</NavLink> </li>
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={logoIcon} />
                        </div>
                    </label>
                    {
                        user ?
                            <button onClick={handelLogOut} className='py-2 px-7 font-bold text-white bg-[#403F3F] '> LogOut</button>
                            :
                            <Link to={'/login'}>
                                <button className='py-2 px-7 font-bold text-white bg-[#403F3F] '> Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;