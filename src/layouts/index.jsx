import BottomMenu from "../components/bottomMenu"
import Navbar from "../components/navbar"
import Navigation from "../components/navigation"

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row">
            <Navbar />
            <Navigation />
            <main className="min-h-screen md:pl-32 lg:pl-64 pb-32 bg-black text-white w-full pt-16 md:pt-4">{children}</main>
            <BottomMenu />
        </div>
    )
}

export default MainLayout