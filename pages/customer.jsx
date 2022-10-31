import Banner from "../components/customer/Banner"
import Navbar from "../components/customer/Navbar"
import Tabs from '../components/customer/Tabs'
import Product from '../components/customer/Product'
import Footer from "../components/Home/Footer"

const customer = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Tabs/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default customer