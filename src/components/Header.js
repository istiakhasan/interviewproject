import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Logo from '../images/Ubbu Brand.png'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-white lg:h-[88px] shadow-lg ">
                <div class="dropdown navbar-start lg:hidden">
          
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                        <li className='my-5'>
                            <div
                                className=' border-[1.4px] lg:w-[360px] h-[48px] rounded flex  items-center border-[#515151]'>
                                <FontAwesomeIcon className='text-[14.25px] ml-[18px] mr-[11.75px] text-[#515151]'
                                    icon={faMagnifyingGlass} />
                                <input type="text" placeholder="Search"
                                    className="text-[#2B2B2B] font-[500]    outline-none shadow-none " />
                            </div>
                        </li>


                    </ul>
                </div>
                <div className="navbar-center lg:navbar-start">

                    <img className='lg:ml-[99px]  lg:w-[96px] lg:h-[48px] h-16 w-16 object-contain' alt='' src={Logo} />
                    <div
                        className='lg:ml-[117px]  ml-12 border-[1.4px] lg:w-[360px] h-[48px] rounded lg:flex hidden  items-center border-[#515151]'>
                        <FontAwesomeIcon className='text-[14.25px] ml-[18px] mr-[11.75px] text-[#515151]'
                            icon={faMagnifyingGlass} />
                        <input type="text" placeholder="Search"
                            className="text-[#2B2B2B] font-[500]    outline-none shadow-none " />
                    </div>
                </div>

                <div className='navbar-end lg:hidden'>
                <label htmlFor="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>


            </div>
        </div>
    );
};

export default Header;