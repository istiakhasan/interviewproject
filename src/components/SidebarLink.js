import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
const SidebarLink = ({ item }) => {
  const hasChildren = item.children ? true : false;
  const [click, setclicked] = useState(false);
  const isActive = item.name.includes("New");
  return (
    <li
      className={`${
        isActive ? "bg-secondary text-white" : "bg-[#F6F6F6]"
      } w-full  h-[48px]  mb-[6px] rounded-[6px] hover:bg-secondary  hover:text-white`}
    >
      <div>
        {hasChildren && (
          <div className="w-[15px]">
            <FontAwesomeIcon
              className="text-[15px] mr-[16px] "
              onClick={() => setclicked(!click)}
              icon={click ? faCaretDown : faCaretRight}
            />
          </div>
        )}
        <FontAwesomeIcon
          className="mr-[13.4px]  text-[15px]"
          icon={item.icon}
        />
        <p className={` text-[14px] w-[98px] font-[500]  `}>{item.name}</p>
      </div>
      <div className="h-full ">
        {item.addIcon && <FontAwesomeIcon icon={item.addIcon} />}
      </div>
    </li>
  );
};

export default SidebarLink;
