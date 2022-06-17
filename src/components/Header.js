import React from 'react';
import Logo from '../images/Ubbu Brand.png'

const Header = () => {
    return (
        <div>
            <div class="navbar bg-white h-[88px]">
  <div class="navbar-start">
   
    <img className='ml-[99px]  w-[96px] h-[48px] ' alt='' src={Logo} />
    <div className='ml-[117px] border-[1.4px] w-[360px] h-[48px] rounded flex justify-center items-center border-[#515151]'>

     <input type="text" placeholder="Search" class="   outline-none shadow-none b" />
    </div>
  </div>
  
  
</div>
        </div>
    );
};

export default Header;