import { useContext, useState } from "react"
import Button from "../components/Button"
import { BlogContext } from "../context/BlogContext"
import { useNavigate, useParams } from "react-router"

const EditBlog = () => {
  const {blogs, blogsDispatch} = useContext(BlogContext)
  const params = useParams()
  const currentBlog = blogs.find(blog => blog.id == params.blogId)
  const [title, setTitle] = useState(currentBlog.title)
  const [author, setAuthor] = useState(currentBlog.author)
  const [image, setImage] = useState(currentBlog.image)
  const [content, setContent] = useState(currentBlog.content)
  const [key, setKey] = useState(currentBlog.key)
  const navigate = useNavigate()

  const validateFields = () => {
    if(!title){
      alert("Please enter Blog title")
      return false
    }
    if(!content){
      alert("Please enter Blog content")
      return false
    }
    return true
  }

  const updateBlog = () => {
    const isValid = validateFields()
    if(!isValid){
      return
    }
    const editBlog = {
      id: currentBlog.id,
      title: title,
      author: author ? author : "Anonymous",
      image: image,
      content: content,
      key: key,
      date: currentBlog.date
    }
    blogsDispatch({type: "UPDATE_BLOG", payload: {...editBlog}})
    navigate(`/blogs/${currentBlog.id}`)
  }

  const deleteBlog = () => {
    const confirmDelete = confirm("Are you sure you want to delete blog?")
    if(confirmDelete)
      blogsDispatch({type: "DELETE_BLOG", payload: {id: currentBlog.id}})
    navigate(`/`)
  }

  return (
    <div className="editBlog">
      <h1>Edit Blog</h1>
      <div className="inputFields">
        <div id="title">
          <h2>Blog Title*</h2>
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
        <div id="key">
          <h2>Secret Key</h2>
          <input value={key} onChange={(e) => {setKey(e.target.value)}} type="text" placeholder="Make editing private"/>
        </div>
        <div id="body">
          <h2>Blog Content*</h2>
          <textarea value={content} onChange={(e) => {setContent(e.target.value)}} placeholder="Some content to post"></textarea>
        </div>
        <Button id="save" text="Save" onClickFunc={updateBlog}/>
        <Button id="delete" text="Delete" onClickFunc={deleteBlog}/>
      </div>
    </div>
  )
}

export default EditBlog
