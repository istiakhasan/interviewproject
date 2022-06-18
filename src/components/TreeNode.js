import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown,faCaretRight } from '@fortawesome/free-solid-svg-icons'
import FolderTree from './FolderTree';

const TreeNode =({node})=>{
    const [childVisible, setChildVisiblity] = useState(false);

    const hasChild = node.children ? true : false;
    return (
        <li className="w-[253px] min-h-[40px] px-[10px] py-[8px] ">
        <div className="flex" onClick={(e) => setChildVisiblity((v) => !v)}>
          {hasChild && (
            <div>
              <FontAwesomeIcon icon={childVisible?faCaretDown:faCaretRight} />
            </div>
          )}
  
          <div className="text-[14px] ml-[16.67px] font-[500] text-[#2B2B2B]">
            
            {node.name}
          </div>
        </div>
  
        {hasChild && childVisible && (
         
            <ul className="ml-[20px]">
              <FolderTree data={node.children} />
            </ul>
         
        )}
      </li>
    )
}

export default TreeNode