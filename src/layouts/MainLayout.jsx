import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
	  <>
		  <Navbar />
		  <Outlet />
		  <ToastContainer />
		  <Footer/>
	  </>
  )
}

export default MainLayout
