export const BlogReducer = (blogs, action) => {
    switch(action.type){
        case 'CREATE_BLOG':
            return [...blogs, action.payload]
        case 'DELETE_BLOG':
            return blogs.filter(blog => blog.id === action.payload.id)
        case 'UPDATE_BLOG':
            return blogs.map(blog => {
                if(blog.id === action.payload.id)
                    return action.payload
                else
                    return blog
            })
    }
}