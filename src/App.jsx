import AllUsers from "./components/AllUsers"
import Home from "./components/Home"
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import SingleUser from "./components/SingleUser"

function App() {

  return (
    <>
      <NavBar />
      <h1>React Router Demo</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<AllUsers food="Chimi" />} />
        <Route path='/users/:id' element={<SingleUser />} />
      </Routes>
      
    </>
  )
}

export default App
