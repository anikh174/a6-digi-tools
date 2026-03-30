import React from "react";

const PremiumDigi = () => {
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
            className="tab"
            aria-label="Products"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumDigi;
