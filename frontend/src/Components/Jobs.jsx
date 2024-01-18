import { useEffect, useState } from "react";
import { applyJob, getJobs } from "../utils/backend";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();

      console.log(data);

      setJobs(data);
    };

    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    const userId = localStorage.getItem("userId");
    const res = await applyJob(jobId, userId);

    alert("Applied Successfully");
  };

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-2 gap-10 py-10 px-48">
        {jobs.map((job) => (
          <button className="items-start bg-white mx-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <div className="col-span-11 flex flex-col px-10 text-left">
              <h3 aria-label="Company Name" className="text-sm text-gray-600">
                {job.company}
              </h3>
              <a
                aria-label="Job Position"
                className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {job.position}
              </a>
              <p
                aria-label="Job Description"
                className="overflow-hidden pr-7 text-sm"
              >
                {job.desc}
              </p>
              <div className="mt-3 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
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
              <div className="">
                <button
                  onClick={() => handleApply(job._id)}
                  aria-label="Apply Button for Job"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-1 px-4 rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
