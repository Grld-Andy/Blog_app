import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { BlogContext } from "../context/BlogContext"
import { useNavigate } from "react-router"
import { FiEdit2 } from "react-icons/fi"

const Blog = () => {
  const params = useParams()
  const {blogs} = useContext(BlogContext)
  const currentBlog = blogs.find(blog => blog.id == params.blogId)

  const navigate = useNavigate()
  const viewBlog = (blogId) => {
    navigate(`/blogs/${blogId}`)
  }

  const goToEdit = () => {
    if(!currentBlog.key){
      navigate(`/editBlog/${currentBlog.id}`)
      return
    }
    const key = prompt("Please enter secret key")
    if(key == currentBlog.key){
      navigate(`/editBlog/${currentBlog.id}`)
    }else{
      alert("Key is invalid!")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params])

  return (
    <div className="single_blog">
      <div></div>
      <div>
        <div className="top">
          <h1>{currentBlog.title.toUpperCase()}</h1>
          <div onClick={goToEdit}><FiEdit2/></div>
        </div>
        <div className="hero_image">
          <img src={currentBlog.image}/>
        </div>
        <div className="content">
          <p>{currentBlog.content}</p>
        </div>
        <div className="meta_data">
          <h2>{currentBlog.author.toUpperCase()}</h2>
          <h3>{currentBlog.date}</h3>
        </div>
        <h1 id="subTitle">Read More Blogs</h1>
        <div className="more_blogs">
          {
            blogs.map((blog, index) => (
              <div className="blog_slide" key={index} onClick={() => {viewBlog(blog.id)}}>
                <img src={blog.image}/>
                <div className="blog_details">
                  <h2>{blog.title.toUpperCase()}</h2>
                  <h3>{blog.author}</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Blog
