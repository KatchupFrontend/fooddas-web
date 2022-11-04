import React from 'react'
import Navbar from '../Home/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from '../Home/Footer'
const Layout = ({children}) => {
  return (
    <div>
      <ToastContainer position='bottom-center' limit={1}>
        <Navbar />
        {children}
        <Footer />
      </ToastContainer>
    </div>
  );
}

export default Layout