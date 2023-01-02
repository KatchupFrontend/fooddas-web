import Head from 'next/head'
import Layout from '../component/Layout'

import Tabs from '../component/Tabs'
import FoodItem from '../component/FoodItem'


const Home = () => {
  return (
    <Layout title="Home Page">
    <Tabs/>
    <FoodItem/>
    </Layout>
  )
}

export default Home