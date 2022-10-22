
import But from "../components/customer/But"
import Checkout from "../components/customer/Checkout"
import DetailPage from "../components/customer/DetailPage"
import ModalCart from "../components/customer/ModalCart"
import Navbar from "../components/customer/Navbar"
import Product from "../components/customer/Product"
import Featured from "../components/deals/Featured"
import Slider from "../components/deals/Slider"
const Home = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-20">
      <Navbar/>
      <Featured/>
    </div>
  )
}

export default Home