import { Route,Routes,BrowserRouter } from "react-router-dom"
import {SpotlightPreview} from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import WriteBlog from "./pages/WriteBlog"
import Allpost from "./pages/Allpost"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpotlightPreview></SpotlightPreview>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/create" element={<WriteBlog></WriteBlog>}></Route>
          <Route path="/bulk" element={<Allpost></Allpost>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
