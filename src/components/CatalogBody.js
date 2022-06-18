import React from 'react';
import CatalogFolderTree from './CatalogFolderTree';

const CatalogBody = () => {
    return (
        <div className='h-auto'>
            <h1 className='text-[#515151] text-[18px] font-[600]'>Catalog </h1>
            <div className='bg-white h-[601px] rounded-[6px] mt-[10px]'>
                <div>
                    <select class="select w-full max-w-xs border border-[#BDBDBD] outline-none ml-[20px] mt-[20px] text-[#404040]">
                        <option  selected>BEST DENKI SHOP</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div></div>
            </div>
            <CatalogFolderTree />
        </div>
    );
};

export default CatalogBody;