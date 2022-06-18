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
        <section className='pt-[20px] px-[20px] h-[675px] bg-[#FFFFFF] mt-[20px] flex justify-between'>
            <div>

            <h1 className='font-[600] text-[18px] text-[#515151]'>Catalog</h1>
            <FolderTree data={catalogData} />
            </div>
             <div>
            
                                 <button className='btn  btn-secondary text-[14px] font-[600] text-[#FFFFFF] rounded-[6px] h-[40px] py-[10px] px-[20px]'>Add Category</button>
                                 <button className='btn  btn-secondary text-[14px] font-[600] text-[#FFFFFF] rounded-[6px] h-[40px] py-[10px] ml-[14px] px-[20px]'>Add Product</button>
            </div>               
                      
           
        </section>
    );
};

export default CatalogFolderTree;