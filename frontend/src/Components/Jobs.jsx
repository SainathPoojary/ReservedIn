import { useEffect, useState } from "react";
import { getJobs } from "../utils/backend";
import Navbar from "./Navbar";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();

      console.log(data);

      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      {/*  {
        company: "Accenture",
        position: "SWE",
        date: "21 March",
        location: "Home work",
        tags: ["Part-time", "Hello"],
        desc: "An illustrator creates visual art, designs, and graphics to communicate ideas and messages through various mediums such as books, magazines, websites, and advertisements.",
      }, */}

      {/* grid layout */}
      <div className="grid grid-cols-2 gap-4  p-8 ">
        {jobs.map((job) => (
          <div className="items-start bg-white mx-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            {/* <a className="order-2 col-span-1 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
              <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                <img
                  src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
                  alt=""
                  className="h-full w-full object-cover text-gray-700"
                />
              </div>
            </a> */}
            <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
              <h3 className="text-sm text-gray-600">{job.company}</h3>
              <a
                href="#"
                className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {job.position}
              </a>
              <p className="overflow-hidden pr-7 text-sm">{job.desc}</p>
              <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className>
                  Location:
                  <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {job.location}
                  </span>
                </div>
                <div className>
                  Date:
                  <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                    {job.date}
                  </span>
                </div>
                <div className>
                  Tags:
                  {job.tags.map((tag) => (
                    <span className="ml-2 mr-1 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                      <span className="mr-1">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
