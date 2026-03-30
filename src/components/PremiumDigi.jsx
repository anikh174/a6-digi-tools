import React from "react";
import Cart from "./Cart";

const PremiumDigi = ({activeTab, setActiveTab}) => {
  console.log(activeTab)
  return (
    <div className="mt-28 ">
      <div className="text-center space-y-5">
        <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
        <p className="text-sm text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
              <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full font-bold text-lg"
          aria-label="Products"
          defaultChecked
          onClick={()=>setActiveTab("Products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full font-bold text-lg"
          aria-label="Cart"
          onClick={()=>setActiveTab("Cart")}
        />
      </div>
      </div>
    </div>
  );
};

export default PremiumDigi;
