import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PremiumDigi from './components/PremiumDigi'
import Products from './components/Products'
import UserPremiumRating from './components/UserPremiumRating'

const getProducts = async()=>{
  const res = await fetch("/data.json")
  return res.json();
}

const productsPromise = getProducts();
console.log(productsPromise)

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <UserPremiumRating></UserPremiumRating>
      <PremiumDigi></PremiumDigi>
      <Products productsPromise={productsPromise}></Products>
    </>
  )
}

export default App
