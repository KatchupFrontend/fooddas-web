import Navbar from "./Home/Navbar"
import Footer from "./Home/Footer"





const Layout = ({children}) => {
   
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout