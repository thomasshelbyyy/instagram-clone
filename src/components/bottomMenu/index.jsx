import {
	HomeIcon as HomeSolid,
	ChatBubbleLeftEllipsisIcon as ChatSolid,
	GlobeAsiaAustraliaIcon as GlobeSolid,
} from "@heroicons/react/16/solid";
import {
	ChatBubbleLeftEllipsisIcon as ChatOutline,
	HomeIcon as HomeOutline,
	GlobeAsiaAustraliaIcon as GlobeOutline,
	PlayCircleIcon,
	PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { brookeCagle } from "../../assets/profile/images";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CreatePost from "../createPost";

const BottomMenu = () => {
	const [createPostActive, setCreatePostActive] = useState(false);
	const location = useLocation();
	return (
		<div className="fixed bottom-0 py-1 px-5 w-screen md:hidden bg-black flex justify-evenly border-t border-gray-400 text-white">
			<Link to="/">
				{location.pathname === "/" ? (
					<HomeSolid className="w-8 h-8" />
				) : (
					<HomeOutline className="w-8 h-8" />
				)}
			</Link>
			<Link to="/explore">
				{location.pathname === "/explore" ? (
					<GlobeSolid className="w-8 h-8" />
				) : (
					<GlobeOutline className="w-8 h-8" />
				)}
			</Link>
			<button>
				<PlayCircleIcon className="w-8 h-8" />
			</button>
			<button onClick={() => setCreatePostActive(true)}>
				<PlusCircleIcon className="w-8 h-8" />
			</button>
			<Link to="/message">
				{location.pathname === "/message" ? (
					<ChatSolid className="w-8 h-8" />
				) : (
					<ChatOutline className="w-8 h-8" />
				)}
			</Link>
			<Link to="/profile">
				<img src={brookeCagle} className="w-8 h-8 rounded-full" alt="" />
			</Link>
			{createPostActive && <CreatePost setVisible={setCreatePostActive} />}
		</div>
	);
};

export default BottomMenu;
