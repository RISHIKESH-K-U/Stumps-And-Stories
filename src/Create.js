import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("mario");
  const [isPending, setisPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setisPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setisPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>ADD A NEW BLOG</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <label>Blog Body : </label>
        <textarea
          required
          value={body}
          onChange={(e) => setbody(e.target.value)}
        ></textarea>
        <label>Blog Author : </label>
        <select
          value={author}
          onChange={(e) => {
            setauthor(e.target.value);
          }}
        >
          <option value="Charlotte">Charlotte</option>
          <option value="Sasha">Sasha</option>
          <option value="Adam">Adam</option>
          <option value="Mathews">Mathews</option>
          <option value="Diana">Diana</option>
          <option value="Tamako">Tamako</option>
          <option value="Rahul">Rahul</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
