import React from "react";
import { TbFaceIdError } from "react-icons/tb";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Products proceed to successfully");
  };

  const handleDelete = (item) => {
        const filtered = carts.filter(filteredCard =>filteredCard.id !== item.id)
        setCarts(filtered);
        toast.error("Item removed to cart");
    };
  return (
    <div className="max-w-7xl mx-auto my-5 px-8 lg:my-20">
      <div className="border-2 border-[#F2F2F2] p-5 lg:p-10 rounded-lg">
        <h3 className="font-bold text-2xl mb-5">Your Cart</h3>

        {carts.length === 0 ? (
          <div className="space-y-3 text-center bg-zinc-50 p-3 lg:p-14 rounded-lg">
            <div className="flex gap-2 items-center justify-center">
                <TbFaceIdError className="text-8xl"/>
                <p className="text-3xl font-bold">Cart is empty!!</p>
            </div>
            <p className="text-sm lg:text-xl text-[#627382]">Please, Added some products then you will be proceed</p>
          </div>
        ) : (
          <div>
            {carts.map((cart, index) => (
              <div key={index} className="flex items-center justify-between bg-[#F9FAFC] p-5 mb-5">
                <div className="flex items-center gap-3">
                  <div className=" border border-gray-300 rounded-full h-16 w-16 p-4 bg-white">
                    <img className="h-8 w-8" src={cart.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="font-bold">{cart.name}</h3>
                    <p>${cart.price}</p>
                  </div>
                </div>

                <p onClick={()=>handleDelete(cart)} className="text-red-500 font-bold btn rounded-full text-lg">
                  remove
                </p>
              </div>
            ))}
          </div>
        )}

        <div>
          <div className="flex justify-between my-5">
            <p>Total:</p>
            <p className="font-bold text-2xl">${totalPrice}</p>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] py-6 text-center text-white font-bold rounded-full"
          >
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
