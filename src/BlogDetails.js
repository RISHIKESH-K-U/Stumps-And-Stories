import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handledelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-deatils">
      {isPending && <div>Loading ... </div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>

          <p>Written by {blog.author}</p>
          <br />
          <div>{blog.body}</div>
          <br />
          <button
            onClick={handledelete}
            style={{
              background: "#f1356d",
              color: "#fff",
              border: "0",
              padding: "8px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
