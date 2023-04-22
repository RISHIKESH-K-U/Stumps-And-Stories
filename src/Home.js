import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(" http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>DATA IS LOADING</div>}
      {blog && <BlogList blogs={blog} />}
    </div>
  );
};

export default Home;
