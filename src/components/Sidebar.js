import React from 'react';
import {Outlet} from 'react-router-dom'
import ProfilePicture from '../images/ProfilePicture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGear,faMagnifyingGlass,faHome,faFileLines,faImage,faBars,faFileInvoice,faShop,faUserCircle ,faTruck,faSuitcaseRolling,faBlind,faPlus,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  const menuData=[
    {id:1,name:"New",children:[],icon:faGear,addIcon:faPlus},
    {id:2,name:"Dashboard",children:[],icon:faHome,addIcon:faPlus},
    {id:3,name:"Report",children:[],icon:faFileLines,addIcon:faPlus},
    {id:4,name:"Catalog",children:[],icon:faBlind,addIcon:faPlus},
    {id:5,name:"Products",children:[],icon:faSuitcaseRolling,addIcon:faPlus},
    {id:6,name:"Image Library",children:[],icon:faImage,addIcon:faPlus},
    {id:7,name:"Orders",icon:faBars},
    {id:8,name:"Deliveries",icon:faTruck},
    {id:9,name:"Invoices",icon:faFileInvoice},
    {id:10,name:"Customers",icon:faUserCircle},
    {id:11,name:"Shop",icon:faShop},
    {id:12,name:"Logout",icon:faRightFromBracket}
  ]
  
return (

<div class="drawer drawer-mobile mt-[10px]">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content  py-[20px] pl-[20px] pr-[47px]">
    <Outlet />

    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>

    <ul class="menu  px-[20px] overflow-y-auto pt-[10px]   bg-base-100 text-base-content w-[293px]">
      <div className='flex justify-between items-center mb-[20px]'>
        <div class="avatar">
          <div class="w-[40px] h-[40px] rounded-full">
            <img className='w-[40px] h-[40px]' src={ProfilePicture} alt="" />
          </div>
        </div>
        <select class="select  max-w-xs focus:outline-none text-[16px]  text-[#2B2B2B]">
          <option selected>Alex Jafrar</option>
         
        </select>
        <FontAwesomeIcon className='delete-icon w-[19.88px] h-[21px] text-[#515151]' icon={faGear}></FontAwesomeIcon>
      </div>
      <div className='w-full bg-[#F6F6F6]  h-[48px] rounded flex mb-[6px]  items-center ]'>
        <FontAwesomeIcon className='text-[14.25px] ml-[18px] mr-[11.75px] text-[#515151]' icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search"
          class=" bg-[#F6F6F6] border-none text-[14px] font-[500] text-[#2B2B2B]   outline-none shadow-none " />
      </div>

      {
      menuData.map(item=>(
      <SidebarLink item={item} />

      ))
      }



    </ul>

  </div>
</div>

);
};

export default Sidebar;