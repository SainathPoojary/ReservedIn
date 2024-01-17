import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

const getBlogs = async () => {
  try {
    const response = await axios.get("/blog");
    return response.data.blogs;
  } catch (error) {
    console.log(error);
  }
};

const createBlog = async (title, text, tags, author) => {
  try {
    const response = await axios.post("/blog", {
      title,
      text,
      tags,
      author,
      authorImage: "",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (text, author, blogId) => {
  try {
    const response = await axios.post("/comment", {
      text,
      author,
      blogId,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getBlogs, createBlog };
