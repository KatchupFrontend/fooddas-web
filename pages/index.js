import Head from 'next/head'
import Layout from '../component/Layout'
import Banner from '../component/Banner'
import Tabs from '../component/Tabs'
import FoodItem from '../component/FoodItem'

const Home = () => {
  return (
    <Layout title="Home Page">
    <Banner/>
    <Tabs/>
    <FoodItem/>
    </Layout>
  )
}

export default Home