import Head from "next/head";
import Navbar from "./Navbar";
import Footer from './Footer'
import { useEffect } from "react";
const Layout = ({ children, title }) => {
  
  return (
    <div>
      <Head>
        <title>{title ? title + '- FOODDAS' : 'FOODDAS'}</title>
        <meta name="description" content="" />
        <link rel="icon" href="./logo.png" />
      </Head>

      <header>
       <Navbar/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
