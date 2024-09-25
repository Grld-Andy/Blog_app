import { useContext, useState } from "react"
import Button from "../components/Button"
import { BlogContext } from "../context/BlogContext"
import { useNavigate } from "react-router"

const CreateBlog = () => {
  const {blogsDispatch} = useContext(BlogContext)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [image, setImage] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  const createBlog = () => {
    const newBlog = {title: title, author: author, image: image, content: content}
    blogsDispatch({type: "CREATE_BLOG", payload: {...newBlog}})
    navigate("/")
  }

  return (
    <div className="createBlog">
      <h1>Create a Blog</h1>
      <div className="inputFields">
        <div id="title">
          <h2>Blog Title</h2>
          <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="How to create a blog"/>
        </div>
        <div id="author">
          <h2>Author</h2>
          <input value={author} onChange={(e) => {setAuthor(e.target.value)}} type="text" placeholder="John Doe & Jane Dane"/>
        </div>
        <div id="image">
          <h2>Image Url</h2>
          <input value={image} onChange={(e) => {setImage(e.target.value)}} type="text" placeholder="https://kjkl/2345667"/>
        </div>
        <div id="body">
          <h2>Blog Content</h2>
          <textarea value={content} onChange={(e) => {setContent(e.target.value)}} placeholder="Some content to post"></textarea>
        </div>
        <Button id="button" text="Create" onClickFunc={createBlog}/>
      </div>
    </div>
  )
}

export default CreateBlog
