import React, { useState } from "react";
import AxiosInstance from "../../api/axiosInstance";
import useBlog from "../../context/blog-consumer";

export default function AddBlog() {
  const [form, setForm] = useState({ title: "", body: "" });
  const [alert, setAlert] = useState(null);
  const { addNew } = useBlog();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    addNew(form);
    try {
      const res = await AxiosInstance.post("posts/add", { ...form, userId: 5 });
      setAlert("Successfull added...!");
      console.log(res);
    } catch (err) {
      console.log(err.response.data.message);
      setAlert(JSON.stringify(err.response.data.message));
    }

    console.log(form);
  };
  return (
    <div className="">
      <div className="card-header  text-dark">
        <h5>Add a New Blog Post</h5>
      </div>
      <div className="card-body">
        {alert && <div className="alert alert-info">{alert}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea
              className="form-control"
              id="body"
              rows="5"
              value={form.body}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
