import React from "react";
import { useState, useEffect } from "react";
import TextToSpeech from "./TextToSpeech";
import { useLocation } from "react-router-dom";

function Blog() {
  const location = useLocation();
  const [fontSize, setFontSize] = useState(16);
  const [comments, setComments] = useState([
    {
      text: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
      author: "Michael Gough",
      createdAt: "2021-02-12 15:34:18-0200",
    },
    {
      text: "A very good article. I think that the most important thing is to have a good strategy and to know how to use the tools. I think that the most important thing is to have a good strategy and to know how to use the tools.",
      author: "Sam Gough",
      createdAt: "2021-02-12 15:34:18-0200",
    },
  ]);

  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        text: comment,
        author: localStorage.getItem("name"),
        createdAt: new Date().toISOString(),
      },
    ]);
    setComment("");
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  const msg = new SpeechSynthesisUtterance();
  msg.rate = 0.8;

  return (
    <div>
      <article className="max-w-5xl px-4 py-24 mx-auto space-y-12">
        <div className="w-full mx-auto space-y-4 space-x-2 text-center">
          {location.state.tags.map((genre_name) => (
            <button className="relative z-10 rounded-full bg-gray-300 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-300">
              {genre_name}
            </button>
          ))}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {location.state.title}
          </h1>
          <p className="text-sm text-black">
            by &nbsp;
            <span itemprop="name">{location.state.author}</span>
            &nbsp;on&nbsp;
            <time datetime="2021-02-12 15:34:18-0200">
              {location.state.date}
            </time>
          </p>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2    "
            onClick={increaseFontSize}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5h-2M18 7l-5 5.07l1.41 1.43L17 10.9V17h2v-6.1l2.59 2.6L23 12.07L18 7Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2    "
            onClick={decreaseFontSize}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5h-2M18 17l5-5.07l-1.41-1.43L19 13.1V7h-2v6.1l-2.59-2.6L13 11.93L18 17Z"
              />
            </svg>
          </button>
          <TextToSpeech text={location.state.text} />
        </div>

        <div className="text-black">
          <p
            className="text-justify"
            value="msg"
            id="blog-content"
            style={{ fontSize: `${fontSize}px` }}
          >
            {location.state.blog_content}
          </p>
        </div>
      </article>

      <section className="bg-slate-200 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
              Discussion ({comments.length})
            </h2>
          </div>
          <form className="mb-6" onSubmit={handleSubmit}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none   "
                placeholder="Write a comment..."
                required
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
            >
              Post comment
            </button>
          </form>

          {comments.map((comment) => (
            <article className="p-6 mb-3 text-base bg-white rounded-lg ">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    {comment.author}
                  </p>
                  <p className="text-sm text-gray-600 ">
                    <time
                      pubdate
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      {new Date(comment.createdAt).toDateString().slice(4)}
                    </time>
                  </p>
                </div>
              </footer>
              <p className="text-gray-500 ">{comment.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
