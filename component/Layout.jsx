import Head from "next/head";
import Navbar from "./Navbar";
import {ToastContainer } from "react-toastify";
import Footer from './Footer'


const Layout = ({ children, title }) => {
  
  return (
    <div>
      <Head>
        <title>{title ? title + "- FOODDAS" : "FOODDAS"}</title>
        <meta name="description" content="" />
        <link rel="icon" href="./logo.png" />
      </Head>
      <ToastContainer position="bottom-center" limit={1}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </ToastContainer>
    </div>
  );
};

export default Layout;
