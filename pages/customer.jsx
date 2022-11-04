import Banner from "../components/customer/Banner"
import Tabs from '../components/customer/Tabs'
import Product from '../components/customer/Product'
import Layout from "../components/customer/Layout"

const customer = () => {
  return (
    <div>
    <Layout>
        <Banner/>
        <Tabs />
        <Product />
      </Layout>
    </div>
  );
}

export default customer