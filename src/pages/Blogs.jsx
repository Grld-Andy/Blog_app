import { useContext, useState } from 'react'
import BlogCell from '../components/BlogCell'
import Button from '../components/Button'
import { BlogContext } from '../context/BlogContext'
import { useNavigate } from 'react-router'

const Blogs = () => {
    const [tags, setTags] = useState(['sports', 'technology', 'politics', 'agriculture'])
    const [selectedTag, setSelectedTag] = useState(tags[0])
    const {blogs} = useContext(BlogContext)
    const navigate = useNavigate()

    const navigateToCreate = () => {
        navigate('/createBlog')
    }
  
    const handleTagClick = (index) => {
      setSelectedTag(tags[index])
    }

    return (
        <div>
            <div className='tags'>
                {
                    tags.map((tag, index) => (
                    <h3 key={index} onClick={() => handleTagClick(index)}>{tag}</h3>
                    ))
                }
            </div>
            <div className='selectedTag'>
                <h1>Blogs</h1>
                <Button text="Add +" onClickFunc={navigateToCreate}/>
            </div>
            <div className='blogs'>
                {
                    blogs.length ?
                    blogs.map((blog, index) => (
                        <BlogCell key={index} blog={blog}/>
                    ))
                    : <h2>No blogs posted</h2>
                }
            </div>
        </div>
    )
}

export default Blogs
