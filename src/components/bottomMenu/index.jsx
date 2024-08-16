import { HomeIcon } from "@heroicons/react/16/solid"
import { ChatBubbleLeftEllipsisIcon, GlobeAsiaAustraliaIcon, PlayCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { brookeCagle } from "../../assets/profile/images"
import { Link } from "react-router-dom"
const BottomMenu = () => {
    return (
        <div className="fixed bottom-0 py-1 px-5 w-screen md:hidden bg-black flex justify-evenly border-t border-gray-400 text-white">
            <Link to="/">
                <HomeIcon className="w-8 h-8" />
            </Link>
            <button>
                <GlobeAsiaAustraliaIcon className="w-8 h-8" />
            </button>
            <button>
                <PlayCircleIcon className="w-8 h-8" />
            </button>
            <button>
                <PlusCircleIcon className="w-8 h-8" />
            </button>
            <Link to="/message">
                <ChatBubbleLeftEllipsisIcon className="w-8 h-8" />
            </Link>
            <Link to="/profile">
                <img src={brookeCagle} className="w-8 h-8 rounded-full" alt="" />
            </Link>
        </div>
    )
}

export default BottomMenu