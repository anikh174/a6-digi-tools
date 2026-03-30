import React, { useState } from "react";
import { TiTickOutline } from "react-icons/ti";

const ProductCard = ({product}) => {
   const [isAddToCart, setIsAddToCart] = useState(false);
   const handleBuyNow =()=>{
        setIsAddToCart(true)
   }
  return (
    <div>
      <div className="border shadow-lg rounded-lg p-5">
        <div>
          <p className="text-right">{product.tag}</p>
        </div>
        <div className=" border border-gray-300 rounded-full h-16 w-16 p-4 mb-4">
          <img className="h-8 w-8" src={product.icon} alt="" />
        </div>

        <div className="space-y-1 mb-4">
          <h3 className="font-bold text-2xl">{product.name}</h3>
          <p className="text-sm text-[#627382] line-clamp-1">
            {product.description}
          </p>
          <p className="font-bold text-2xl">
            $ {product.price}
            <span className="text-lg">/{product.period}</span>
          </p>
        </div>

        <div className="mb-4">
          <ul>
            {product.features.map((feature, index) => (
              <li className="flex text-center gap-1" key={index}>
                {" "}
                <TiTickOutline className="h-5 w-5 text-[#30B868]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleBuyNow}
          className="btn w-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-6 text-center text-white font-bold rounded-full"
        >
          {isAddToCart ? "Added To Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
