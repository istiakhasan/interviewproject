import React from "react";
import CatalogFolderTree from "./CatalogFolderTree";
import HorizontalTree from "./HorizontalTree";

const CatalogBody = () => {
  return (
    <section className="h-auto">
      <h1 className="text-[#515151] text-[18px] font-[600]">Catalog </h1>
      <div className="bg-white lg:h-[601px] p-4 lg:p-0 rounded-[6px] mt-[10px]">
        <div className="lg:grid grid-cols-6">
          <select className="select w-full max-w-xs border border-[#BDBDBD] col-span-2 outline-none lg:ml-[20px] mt-[20px] text-[#404040]">
            <option value="best denki shop">BEST DENKI SHOP</option>
            <option value={"homer"}>Homer</option>
            <option value={"marge"}>Marge</option>
          </select>

          <HorizontalTree />
        </div>
      </div>
      <CatalogFolderTree />
    </section>
  );
};

export default CatalogBody;
