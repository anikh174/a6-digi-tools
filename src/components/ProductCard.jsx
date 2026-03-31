import React, { useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { toast } from "react-toastify";

const ProductCard = ({product, carts, setCarts}) => {
   const [isAddToCart, setIsAddToCart] = useState(false);
   const handleBuyNow =()=>{
        setIsAddToCart(true);

        const isFound = carts.find(item => item.id === product.id);
        if(isFound){
          toast.error("Item already in cart");
          return;
        }
        setCarts([...carts, product]);
        toast.success("Item added to cart");
   }
  return (
    <div>
      <div className="border border-[#F2F2F2] shadow-lg rounded-lg p-5 duration-300 hover:shadow-xl hover:scale-110">
        <div className="flex justify-end">
          <p className={`border px-3 py-1 rounded-full
            ${product.tagType === "new" && "text-[#0A883E] bg-green-100 text-sm font-medium items-center"}
            ${product.tagType === "best" && "text-[#BB4D00] bg-[#FEF3C6] text-sm font-medium items-center"}
            ${product.tagType === "popular" && "text-[#4F39F6] bg-[#E1E7FF] text-sm font-medium items-center"}

            
            `}>{product.tag}</p>
        </div>
        <div className=" border border-gray-300 rounded-full h-14 w-14 p-3 mb-4">
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

        <div onClick={handleBuyNow}>
          {isAddToCart ? <button className="btn w-full bg-linear-to-l bg-success py-6 text-center text-white font-bold rounded-full">Added To Cart</button> : <button className="btn w-full bg-linear-to-l from-[#9514FA] to-[#4F39F6]  py-6 text-center text-white font-bold rounded-full">Buy Now</button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
