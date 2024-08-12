import { HomeIcon } from "@heroicons/react/16/solid"
import { ChatBubbleLeftEllipsisIcon, GlobeAsiaAustraliaIcon, PlayCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"

const BottomMenu = () => {
    return (
        <div className="fixed bottom-0 py-1 px-5 w-screen md:hidden bg-black flex justify-evenly border-t border-gray-400 text-white">
            <button>
                <HomeIcon className="w-8 h-8" />
            </button>
            <button>
                <GlobeAsiaAustraliaIcon className="w-8 h-8" />
            </button>
            <button>
                <PlayCircleIcon className="w-8 h-8" />
            </button>
            <button>
                <PlusCircleIcon className="w-8 h-8" />
            </button>
            <button>
                <ChatBubbleLeftEllipsisIcon className="w-8 h-8" />
            </button>
            <button>
                <ChatBubbleLeftEllipsisIcon className="w-8 h-8" />
            </button>
        </div>
    )
}

export default BottomMenu