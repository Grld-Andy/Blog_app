import './App.css'
import Footer from './components/Footer'
import {Routes, Route, Outlet} from "react-router-dom"
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'
import Header from './components/Header'
import EditBlog from './pages/EditBlog'

const Layout = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
  )
}


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Blogs/>}/>
        <Route path='createBlog' element={<CreateBlog/>}/>
        <Route path='/blogs/:blogId' element={<Blog/>}/>
        <Route path='/editBlog/:blogId' element={<EditBlog/>}/>
      </Route>
    </Routes>
  )
}

export default App
