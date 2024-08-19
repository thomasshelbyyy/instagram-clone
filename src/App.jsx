import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/home'
import ProfilePage from './pages/profile'
import MessagePage from './pages/message'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </Router>
  )
}

export default App
