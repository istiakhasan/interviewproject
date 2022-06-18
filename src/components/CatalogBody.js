import React from 'react';
import CatalogFolderTree from './CatalogFolderTree';
import HorizontalTree from './HorizontalTree';

const CatalogBody = () => {
    return (
        <section className='h-auto'>
            <h1 className='text-[#515151] text-[18px] font-[600]'>Catalog </h1>
            <div className='bg-white h-[601px] rounded-[6px] mt-[10px]'>
                <div className='grid grid-cols-6'>
                    <select class="select w-full max-w-xs border border-[#BDBDBD] col-span-2 outline-none ml-[20px] mt-[20px] text-[#404040]">
                        <option  selected>BEST DENKI SHOP</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                   
                        <HorizontalTree />
                    
                </div>
                <div></div>
            </div>
            <CatalogFolderTree />
        </section>
    );
};

export default CatalogBody;