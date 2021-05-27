import { Link } from 'react-router-dom';

const BlogList =(props)=>
{
    const blogs=props.blogp;
    const title=props.title;


    return(
        <div className="blog-list">
        <h2>{title}</h2>
            {blogs.data.map(
                (blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/user/${blog.id}`}>
                            <h2>{blog.first_name}  { blog.last_name}</h2>
                            <p>Written by {blog.email}</p>
                        </Link>

                    </div>
                )
            )}
        </div>


    );
}

export default BlogList;