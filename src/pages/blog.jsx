import { useEffect, useState } from "react";
import AxiosInstance from "../api/axiosInstance";
import { fetchBlog, fetchBlogComments } from "../service/blog";
import BlogList from "../features/blog";
import AddBlog from "../features/blog/add-blog";
import PlacheolderINstance from "../api/jsonInstance";
import BlogProvider from "../context/blog-provider";

function Blog() {
  const [data, setData] = useState([]);

  async function fetchInitalData() {
    const blog = await fetchBlog("posts/user/13");
    const placeholderBlog = await PlacheolderINstance.get("posts?userId=1");
    console.log(placeholderBlog.data);
    for (let key in blog) {
      const firstBlogComments = await fetchBlogComments(
        `posts/${blog[key].id}/comments`
      );
      blog[key].comments = firstBlogComments;
    }

    setData([...blog, ...placeholderBlog.data]);
  }
  //mounting phase
  useEffect(() => {
    // AxiosInstance.get("posts/user/2")
    //   .then((res) => setData(res.data.posts))
    //   .catch((err) => console.log(err));
    fetchInitalData();
  }, []);

  const handleDelete = async (id) => {
    const res = await AxiosInstance.delete(`posts/${id}`);
    console.log(res);
  };

  return (
    <div className="container">
      <h3>Blogger</h3>
      <BlogProvider>
        <div className="row mt-5">
          <AddBlog />
        </div>
        <div className="row mt-3">
          <BlogList list={data} handleDelete={handleDelete} />
        </div>
      </BlogProvider>
    </div>
  );
}

export default Blog;
