import { createContext, useEffect, useReducer } from "react";
import { BlogReducer } from '../reducers/BlogReducer'
import PropTypes from "prop-types";

export const BlogContext = createContext({
    blogs: [],
    blogsDispatch: () => null
})

const BlogContextProvider = ({children}) => {
    const [blogs, blogsDispatch] = useReducer(BlogReducer, [], () => {{
      const localBlog = localStorage.getItem('blogs')
      try{
        return localBlog ? JSON.parse(localBlog) : []
      }catch{
        return []
      }
    }})

    useEffect(() => {
      localStorage.setItem("blogs", JSON.stringify(blogs))
    }, [blogs])

  return (
    <BlogContext.Provider value={{blogs, blogsDispatch}}>
        {children}
    </BlogContext.Provider>
  )
}

BlogContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default BlogContextProvider
