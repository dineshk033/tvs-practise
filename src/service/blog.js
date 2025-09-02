import AxiosInstance from "../api/axiosInstance";

export const fetchBlog = async (url) => {
  try {
    const res = await AxiosInstance.get(url);
    return res.data.posts;
  } catch (error) {
    console.log(error);
  }
};
export const fetchBlogComments = async (url) => {
  try {
    const res = await AxiosInstance.get(url);
    return res.data.comments;
  } catch (error) {
    console.log(error);
  }
};

// async function promise(){

// }
