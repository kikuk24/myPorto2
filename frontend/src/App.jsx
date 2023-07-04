import { Route, Routes } from "react-router-dom"
import Homepage from "./page/Homepage"
import NavBar from "./component/Navbar"
import AboutPage from "./page/AboutPage"
import ProjrctPage from "./page/ProjrctPage"
import ContactPage from "./page/ContactPage"
import LoginPage from "./page/LoginPage"
import FooterComponent from "./component/FooterComponent"
import BlogPage from "./page/BlogPage"
import PostPage from "./page/PostPage"





function App() {

  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" Component={Homepage}/>
      <Route path="/blog" Component={BlogPage}/>
      <Route path="/about" Component={AboutPage}/>
      <Route path="/project" Component={ProjrctPage}/>
      <Route path="/contact" Component={ContactPage}/>
      <Route path="/login" Component={LoginPage}/>
      <Route path="/post" Component={PostPage}/>
      </Routes>
    <FooterComponent/>
    </div>
  )
}
export default App
