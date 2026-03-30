import React, { use} from "react";
import ProductCard from "./ProductCard";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);
  return (
    <div className="mt-10 max-w-[1200px] mx-auto my-[85px]">
      <div className="grid lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
