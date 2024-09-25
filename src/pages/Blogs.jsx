import { useContext, useEffect, useState } from 'react'
import BlogCell from '../components/BlogCell'
import Button from '../components/Button'
import { BlogContext } from '../context/BlogContext'
import { useNavigate } from 'react-router'

const Blogs = () => {
    const [query, setQuery] = useState("")
    const [filteredBlogs, setFilteredBlogs] = useState([])
    const {blogs} = useContext(BlogContext)
    const navigate = useNavigate()

    const navigateToCreate = () => {
        navigate('/createBlog')
    }

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        const filtered = blogs.filter(blog => 
            blog.title.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredBlogs(filtered)
    }, [blogs, query])
  
    return (
        <div>
            <form className="inputContainer">
                <input type='text' onChange={handleQueryChange} value={query} placeholder='Search by title'/>
            </form>
            <div className='selectedTag'>
                <h1>Blogs</h1>
                <Button text="Add +" onClickFunc={navigateToCreate}/>
            </div>
            <div className='blogs'>
                {
                    filteredBlogs.length ? (
                        filteredBlogs.map((blog, index) => (
                            <BlogCell key={index} blog={blog} />
                        ))
                    ) : (
                        <h2>No blogs found</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Blogs
