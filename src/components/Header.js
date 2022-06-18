import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGear,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Logo from '../images/Ubbu Brand.png'

const Header = () => {
    return (
        <div>
            <div class="navbar bg-white h-[88px]">
                <div class="navbar-start">

                    <img className='ml-[99px]  w-[96px] h-[48px] ' alt='' src={Logo} />
                    <div className='ml-[117px] border-[1.4px] w-[360px] h-[48px] rounded flex  items-center border-[#515151]'>
                        <FontAwesomeIcon className='text-[14.25px] ml-[18px] mr-[11.75px] text-[#515151]' icon={faMagnifyingGlass} />
                        <input type="text" placeholder="Search" class="text-[#2B2B2B] font-[500]   outline-none shadow-none b" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;