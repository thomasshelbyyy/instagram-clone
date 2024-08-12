import { Bars3Icon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { ChatBubbleLeftEllipsisIcon, GlobeAsiaAustraliaIcon, HeartIcon, PlayCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <aside className="fixed border-r border-gray-200 bg-black hidden  md:flex flex-col gap-6 text-white p-6 lg:w-64 h-screen items-center lg:items-start">
            <Link className="w-full text-center flex justify-center lg:justify-start" to="/">
                <span className="hidden lg:block text-2xl logo">Instagram</span>
                <FaInstagram className="w-7 h-7 text-white lg:hidden" />
            </Link>
            <ul className=" font-semibold w-full">
                <li className="w-full">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><HomeIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Home</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><MagnifyingGlassIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Search</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><GlobeAsiaAustraliaIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Explore</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><PlayCircleIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Reels</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><ChatBubbleLeftEllipsisIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Meesages</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><HeartIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Notifications</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><PlusCircleIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Create</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><GlobeAsiaAustraliaIcon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">Profile</span>
                    </Link>
                </li>
                <li className="w-full mt-4">
                    <Link className="w-full px-3 py-2 rounded-md flex gap-4 items-center hover:bg-white/30" to="/">
                        <span><Bars3Icon className="w-7 h-7" /></span>
                        <span className="hidden lg:block">More</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Navigation