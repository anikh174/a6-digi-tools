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
console.log(productsPromise);

function App() {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <UserPremiumRating></UserPremiumRating>
      <PremiumDigi activeTab={activeTab} setActiveTab={setActiveTab}></PremiumDigi>
      {activeTab === "Products" && <Products productsPromise={productsPromise}></Products>}
      {activeTab === "Cart" && <Cart></Cart>}
    </>
  );
}

export default App;
