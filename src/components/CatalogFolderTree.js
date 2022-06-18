import React, { useEffect, useState } from "react";
import FolderTree from "./FolderTree";

const CatalogFolderTree = () => {
  const [catalogData, setCatalogData] = useState([]);
  useEffect(() => {
    fetch("CatalogData.json")
      .then((res) => res.json())
      .then((data) => {
        setCatalogData(data);
      });
  }, []);
  return (
    <section className=" h-auto lg:min-h-[675px]  mt-[20px] lg:grid grid-cols-3 gap-5">
      <div className="flex flex-col lg:justify-between  lg:flex-row col-span-2 bg-[#FFFFFF] p-[20px]">
        <div>
          <h1 className="font-[600] text-[18px] text-[#515151]">Catalog</h1>
          <FolderTree data={catalogData} />
        </div>
        <div>
          <button className="btn  btn-secondary text-[14px] font-[600] text-[#FFFFFF] rounded-[6px] h-[40px] py-[10px] px-[20px]">
            Add Category
          </button>
          <button className="btn  btn-secondary text-[14px] mt-5 lg:mt-0 font-[600] ml-3  text-[#FFFFFF] rounded-[6px] h-[40px] py-[10px] lg:ml-[14px] lg:px-[20px]">
            Add Product
          </button>
        </div>
      </div>
      <div className="col-span-1 bg-[#FFFFFF]"></div>
    </section>
  );
};

export default CatalogFolderTree;
