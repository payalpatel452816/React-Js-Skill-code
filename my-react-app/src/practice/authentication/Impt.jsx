import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from '../authentication/Home'
import Login from '../authentication/Login'
import SignUp from '../authentication/SignUp'
import Nvbar from '../authentication/Nvbar'



// Local authentication with LocalStorage

function Impt() {

  return (
    <>
     <Router>
      <Nvbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default Impt
