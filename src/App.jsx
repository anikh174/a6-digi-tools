import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PremiumDigi from "./components/PremiumDigi";
import Products from "./components/Products";
import UserPremiumRating from "./components/UserPremiumRating";

const getProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productsPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);
  console.log(carts)

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Hero></Hero>
      <UserPremiumRating></UserPremiumRating>
      <PremiumDigi activeTab={activeTab} setActiveTab={setActiveTab} carts={carts}></PremiumDigi>
      {activeTab === "Products" && <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts}></Products>}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    </>
  );
}

export default App;
