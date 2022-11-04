import Navbar from "./Home/Navbar"
import Footer from "./Home/Footer"
import { useSession } from "next-auth/react"




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