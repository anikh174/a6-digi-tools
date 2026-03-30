import React, { use } from "react";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);
  console.log([products]);
  return (
    <div className="mt-10">
      <div className="grid lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div className="border shadow-lg rounded-lg space-y-4 p-5">
            <div className=" border border-gray-300 rounded-full h-16 w-16 p-4">
              <img className="h-8 w-8" src={product.icon} alt="" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-2xl">{product.name}</h3>
              <p className="text-sm text-[#627382]">{product.description}</p>
              <p className="font-bold text-2xl">
                $ {product.price}
                <span>/mo</span>
              </p>
            </div>

            <div>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
