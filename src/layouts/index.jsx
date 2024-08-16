import { useLocation } from "react-router-dom"
import BottomMenu from "../components/bottomMenu"
import Navbar from "../components/navbar"
import Navigation from "../components/navigation"

const MainLayout = ({ children }) => {
    const location = useLocation()
    return (
        <>
            <Navbar />
            <Navigation />
            <main className={`h-screen md:pl-32 ${location.pathname === "/message" ? "lg:pl-24" : "lg:pl-64"}  bg-black text-white w-full pt-16 md:pt-0`}>{children}</main>
            <BottomMenu />
        </>
    )
}

export default MainLayout