import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Destination from "./views/Destination"
import Crew from "./views/Crew"
import Technology from "./views/Technology"
import Demo from './views/home2'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  )
}

export default App
