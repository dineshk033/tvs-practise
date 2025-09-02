import { useContext } from "react";
import { BlogContext } from "./blog-context";

function useBlog() {
  return useContext(BlogContext);
}

export default useBlog;
