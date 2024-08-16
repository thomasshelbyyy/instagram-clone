import { HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Navbar = () => {
    return (
        <nav className="fixed flex justify-between md:hidden top-0 left-0 w-screen px-5 py-2 border-b border-gray-400 text-white bg-black">
            <button className="logo text-lg flex items-center gap-3">
                Instagram
                {/* <ChevronDownIcon className="w-5 h-5 text-gray-400" /> */}
            </button>
            <div className="flex gap-3">
                <div className=" rounded-md bg-gray-600 flex">
                    <MagnifyingGlassIcon className="w-8 h-8 text-gray-200 pl-3 pr-2" />
                    <input type="text" placeholder="Search" className="focus:outline-none bg-transparent" />
                </div>
                <HeartIcon className="w-6 h-6" />
            </div>
        </nav>
    )
}

export default Navbar