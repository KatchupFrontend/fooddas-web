import Navbar from "../components/Home/Navbar"
import SignUp from "./SignUp"



const Home = () => {
  return (
    <div className="max-w-screen-xl m-auto mb-20">
      <Navbar/>
    <SignUp/>
    </div>
  )
}

export default Home