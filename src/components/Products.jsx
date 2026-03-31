import React, { use} from "react";
import ProductCard from "./ProductCard";

const Products = ({ productsPromise, carts, setCarts }) => {
  const products = use(productsPromise);
  return (
    <div className="mt-5 lg:mt-10 max-w-[1200px] mx-auto my-[85px]">
      <div className="grid lg:grid-cols-3 gap-8 px-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
