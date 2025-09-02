import React from "react";
import useBlog from "../../context/blog-consumer";

const BlogCard = (props) => {
  const { title, body, comments, id } = props.blog;
  return (
    <div className="card p-2">
      <h4>{title.slice(0, 30) + "..."}</h4>
      <p>{body.slice(0, 100) + "..."}</p>
      {comments && <p>comments count: {comments.length}</p>}
      <button className="btn btn-danger" onClick={() => props.handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default function BlogList({ list, handleDelete }) {
  const { data } = useBlog();
  console.log("its form conteszt", data);
  return (
    <>
      {list.map((item) => (
        <div className="col-md-4 col-12" key={item.id}>
          <BlogCard blog={item} handleDelete={handleDelete} />
        </div>
      ))}
    </>
  );
}
