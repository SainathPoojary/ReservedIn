import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

const getBlogs = async () => {
  try {
    const response = await axios.get("/blogs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createBlog = async (title, text, tags, author) => {
  try {
    const response = await axios.post("/blogs", {
      title,
      text,
      timestamp: new Date().toISOString(),
      url: "https://example.com",
      authorImage: "https://example.com/author.jpg",
      authorId: "65a846db87cfed9b8afecc6c",
      comments: [],
      authors: author,
      index: 2,
      tags,
    });

    return response;
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
      authorImage: "https://example.com/author.jpg",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getJobs = async () => {
  try {
    // const response = await axios.get("/jobs");

    // dummy data
    //     {
    //       "company": "Accenture",
    //       "position" : "SWE",
    //       "date" : "21 March",
    //       "location" : "Home work",
    //       "tags" : [
    //         "Part-time",
    //         "Hello"
    //       ],
    //       "desc": "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements."
    // }

    const jobs = [
      {
        company: "Accenture",
        position: "SWE",
        date: "21 March",
        location: "Home work",
        tags: ["Part-time", "Hello"],
        desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
      },
      {
        company: "Google",
        position: "Software Engineer",
        date: "21 March",
        location: "USA",
        tags: ["Full-time", "Hello"],
        desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
      },
      {
        company: "Accenture",
        position: "SWE",
        date: "21 March",
        location: "Home work",
        tags: ["Part-time", "Hello"],
        desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
      },
      {
        company: "Google",
        position: "Software Engineer",
        date: "21 March",
        location: "USA",
        tags: ["Full-time", "Hello"],
        desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
      },
    ];

    return jobs;
  } catch (error) {
    console.log(error);
  }
};

export { getBlogs, createBlog, createComment, getJobs };
