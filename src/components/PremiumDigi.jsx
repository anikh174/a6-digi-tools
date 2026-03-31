import React from "react";
import Cart from "./Cart";

const PremiumDigi = ({activeTab, setActiveTab, carts}) => {
  console.log(activeTab)
  return (
    <div className="mt-10 lg:mt-28 ">
      <div className="text-center space-y-5">
        <h1 className="font-extrabold text-3xl lg:text-5xl">Premium Digital Tools</h1>
        <p className="text-[9px] lg:text-sm text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
          <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-40 rounded-full font-bold text-lg ${activeTab === "Products" && "bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white"}`}
          aria-label="Products"
          defaultChecked
          onClick={()=>setActiveTab("Products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-40 rounded-full font-bold text-lg ${activeTab === "Cart" && "bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white"}`}
          aria-label={`Carts (${carts.length})`}
          onClick={()=>setActiveTab("Cart")}
        />
      </div>
      </div>
    </div>
  );
};

export default PremiumDigi;
