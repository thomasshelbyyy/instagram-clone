import { fxRijkard, magPole } from "../../../assets/profile/images"

const CommentPost = ()=> {
    return (
        <button className="w-full flex justify-between items-center gap-3 px-3 py-2 hover:bg-gray-600">
            <div className="flex items-center gap-1">
                <img src={fxRijkard} alt="" className="w-8 h-8 rounded-full" />
                <div className="text-sm text-left">
                    <span className="font-semibold"> neymarjr </span>
                    <span> commented in your post: </span>
                    <span> hola hermano que tal? </span>
                    <span className="text-gray-500"> 1h </span>
                </div>
            </div>

            <img src={magPole} alt="" className="w-9 h-9 rounded-lg" />
        </button>
    )
}

export default CommentPost