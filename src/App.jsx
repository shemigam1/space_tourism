import { Routes, Route } from "react-router-dom"
import Home from "./views/Home.jsx"
import Destination from "./views/Destination.jsx"
import Crew from "./views/Crew.jsx"
import Technology from "./views/Technology.jsx"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
