import { Bars3Icon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { ChatBubbleLeftEllipsisIcon, GlobeAsiaAustraliaIcon, HeartIcon, PlayCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { FaInstagram } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { brookeCagle } from "../../assets/profile/images"
import { useState } from "react"
import SearchPanel from "../searchPanel"

const Navigation = () => {
    const [smallNavigation, setSmallNavigation] = useState(false)
    const [isSearchPanelVisible, setSearchPanelVisible] = useState(false)
    const location = useLocation()

    const handleSearchClicked = () => {
        setSmallNavigation(prev => !prev)
        setSearchPanelVisible(prev => !prev)
    }

    const handleCloseSearchPanel = () => {
        setSearchPanelVisible(false)
        setSmallNavigation(false)
    }

    return (
        <>
            <aside className={`fixed border-r border-gray-200 bg-black hidden md:flex flex-col gap-6 text-white p-6 items-center ${location.pathname === "/message" || smallNavigation ? "lg:items-center" : "lg:w-64 lg:items-start"} h-screen transition duration-1000`}>
                <Link className="w-full text-center flex justify-center lg:justify-start" to="/">
                    <span className={`hidden ${location.pathname !== "/message" ? "lg:hidden" : "lg:block"} text-2xl logo`}>Instagram</span>
                    <FaInstagram className={`w-7 h-7 text-white ${location.pathname !== "/message" && "lg:hidden"} `} />
                </Link>
                <ul className="font-semibold w-full">
                    <li className="w-full">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                            <span><HomeIcon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Home</span>}
                        </Link>
                    </li>
                    <li className="w-full mt-4">
                        <button onClick={handleSearchClicked} className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30">
                            <span><MagnifyingGlassIcon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Search</span>}
                        </button>
                    </li>
                    <li className="w-full mt-4">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                            <span><GlobeAsiaAustraliaIcon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Explore</span>}
                        </Link>
                    </li>
                    <li className="w-full mt-4">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                            <span><PlayCircleIcon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Reels</span>}
                        </Link>
                    </li>
                    <li className="w-full mt-4">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/message">
                            <span><ChatBubbleLeftEllipsisIcon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Messages</span>}
                        </Link>
                    </li>
                    <li className="w-full mt-4">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                            <span><HeartIcon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Notifications</span>}
                        </Link>
                    </li>
                    <li className="w-full mt-4">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                            <span><PlusCircleIcon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Create</span>}
                        </Link>
                    </li>
                    <li className="w-full mt-4">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/profile">
                            <span><img src={brookeCagle} className="w-8 h-8 rounded-full" alt="" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>Profile</span>}
                        </Link>
                    </li>
                    <li className="w-full mt-4">
                        <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                            <span><Bars3Icon className="w-7 h-7" /></span>
                            {location.pathname !== "/message" && <span className={`hidden ${!smallNavigation && "lg:block"}`}>More</span>}
                        </Link>
                    </li>
                </ul>
            </aside>
            <SearchPanel isVisible={isSearchPanelVisible} onClose={handleCloseSearchPanel} />
        </>
    )
}

export default Navigation
