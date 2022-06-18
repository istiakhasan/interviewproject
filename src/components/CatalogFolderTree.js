import React, { useEffect, useState } from 'react';
import FolderTree from './FolderTree';

const CatalogFolderTree = () => {
    const [catalogData,setCatalogData]=useState([])
 useEffect(()=>{
    fetch('CatalogData.json')
    .then(res=>res.json())
    .then(data=>{
        setCatalogData(data)
        console.log(data)
    })
 },[])
    return (
        <section className=' h-auto min-h-[675px]  mt-[20px] grid grid-cols-3 gap-5'>
            <div className='flex justify-between col-span-2 bg-[#FFFFFF] p-[20px]'>
                <div>

                    <h1 className='font-[600] text-[18px] text-[#515151]'>Catalog</h1>
                    <FolderTree data={catalogData} />
                </div>
                <div>

                    <button
                        className='btn  btn-secondary text-[14px] font-[600] text-[#FFFFFF] rounded-[6px] h-[40px] py-[10px] px-[20px]'>Add
                        Category</button>
                    <button
                        className='btn  btn-secondary text-[14px] font-[600] text-[#FFFFFF] rounded-[6px] h-[40px] py-[10px] ml-[14px] px-[20px]'>Add
                        Product</button>
                </div>
            </div>
            <div className='col-span-1 bg-[#FFFFFF]'>

            </div>



        </section>
    );
};

export default CatalogFolderTree;