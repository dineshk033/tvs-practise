import { useState } from "react";
import { BLOG } from "./listMock";
import { BlogContext } from "./blog-context";

//step2:creating a provider
//inside this provider componetn, only can able to get the value from context

function BlogProvider({ children }) {
  const [list, setList] = useState(BLOG);
  const addNew = (blog) => {
    setList([...list, blog]);
  };
  return (
    <BlogContext.Provider value={{ data: list, addNew }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
