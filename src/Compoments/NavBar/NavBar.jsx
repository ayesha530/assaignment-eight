import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'

import { FaGithub } from "react-icons/fa";

const NavBar = () => {
   
    const links = <>
       <NavLink to='/' className={({isActive}) => isActive ? 'font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-[16px] mr-3 gradient-border-b': 'text-[#000000] font-medium text-[16px] mr-3'}>Homes</NavLink>
      <NavLink to='/apps' className={({isActive}) => isActive ? 'font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-[16px] mr-3 gradient-border-b': 'text-[#000000] font-medium text-[16px] mr-3'}>Apps</NavLink>
      <NavLink to='/install' className={({isActive}) => isActive ? 'font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-[16px] mr-3 gradient-border-b': 'text-[#000000] font-medium text-[16px] mr-3'}>Installation</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                       {links}
                    </ul>
                </div>
                <a className="text-xl btn"><img src={logo} className='w-[40px]'/>HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-[#fff] font-semibold text-[16px]"><FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;