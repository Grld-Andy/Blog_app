import './App.css'
import Footer from './components/Footer'
import {Routes, Route, Outlet} from "react-router-dom"
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import CreateBlog from './pages/CreateBlog'
import Header from './components/Header'

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
        <Route path='blog' element={<Blog/>}/>
      </Route>
    </Routes>
  )
}

export default App
