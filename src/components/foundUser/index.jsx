import { Link } from "react-router-dom"
import { ejAgumbay } from "../../assets/profile/images"
import { XMarkIcon } from "@heroicons/react/16/solid"

const FoundUser = () => {
    const removeUser = (e) => {
        e.preventDefault()
        alert("removed")
    }
    return (
        <Link className="w-full flex justify-between px-3 py-2 hover:bg-gray-700" to="/profile">
            <div className="flex gap-1 items-center">
                <img src={ejAgumbay} alt="" className="w-10 h-10 rounded-full" />
                <span className="text-xs">
                    <div>cristianto</div>
                    <div className="text-gray-500">Cristiano Roanldo Dos Santos</div>
                </span>
            </div>

            <button onClick={removeUser}>
                <XMarkIcon className="text-gray-400 w-7 h-7" />
            </button>
        </Link>
    )
}

export default FoundUser