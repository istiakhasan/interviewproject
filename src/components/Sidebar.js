import React from 'react';
import {Outlet} from 'react-router-dom'
import ProfilePicture from '../images/ProfilePicture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGear,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
return (

<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content  py-[20px] pl-[20px] pr-[47px]">
    <Outlet />

    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>

    <ul class="menu  px-[20px] overflow-y-auto  bg-base-100 text-base-content w-[293px]">
      <div className='flex justify-between items-center mb-[20px]'>
      <div class="avatar">
        <div class="w-[40px] h-[40px] rounded-full">
          <img className='w-[40px] h-[40px]' src={ProfilePicture} alt="" />
        </div>
      </div>
      <select class="select  max-w-xs focus:outline-none text-[16px]  text-[#2B2B2B]">
        <option selected >Alex Jafrar</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <FontAwesomeIcon className='delete-icon w-[19.88px] h-[21px] text-[#515151]' icon={faGear}></FontAwesomeIcon>
      </div>
      <div className='w-full bg-[#F6F6F6]  h-[48px] rounded flex  items-center ]'>
<FontAwesomeIcon className='text-[14.25px] ml-[18px] mr-[11.75px] text-[#515151]' icon={faMagnifyingGlass} />
<input type="text" placeholder="Search" class=" bg-[#F6F6F6] border-none text-[14px] font-[500] text-[#2B2B2B]   outline-none shadow-none " />
</div>

      <li><a className='pl-0'>Sidebar Item 1</a></li>
      <li><a className=' pl-0'>Sidebar Item 1</a></li>
       
    </ul>

  </div>
</div>

);
};

export default Sidebar;