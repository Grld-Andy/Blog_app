import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const BlogCell = ({blog}) => {
  const navigate = useNavigate()
  const viewBlog = () => {
    navigate(`/blogs/${blog.id}`)
  }

  return (
    <div className='blog_cell' onClick={viewBlog}>
        <img src={blog.image}/>
        <div className='blog_content'>
            <h2>{blog.title}</h2>
            <h3>
              {blog.content}
            </h3>
            <h4>{blog.author.toUpperCase()}</h4>
        </div>
    </div>
  )
}

BlogCell.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCell
