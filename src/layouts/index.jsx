import { useLocation } from "react-router-dom"
import BottomMenu from "../components/bottomMenu"
import Navigation from "../components/navigation"

const MainLayout = ({ children }) => {
    const location = useLocation()
    return (
        <>
            <Navigation />
            <main className={`h-screen md:pl-32 ${location.pathname === "/message" ? "lg:pl-24" : "lg:pl-64"}  bg-black text-white w-full md:pt-0`}>{children}</main>
            <BottomMenu />
        </>
    )
}

export default MainLayout