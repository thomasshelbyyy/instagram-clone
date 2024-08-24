import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import MessagePage from "./pages/message";
import NotificationPage from "./pages/notification";
import ExplorePage from "./pages/explore";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/message" element={<MessagePage />} />
				<Route path="/notification" element={<NotificationPage />} />
				<Route path="/explore" element={<ExplorePage />} />
			</Routes>
		</Router>
	);
}

export default App;
