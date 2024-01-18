import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export async function createJob(company, position, location, date, tags, desc) {
  try {
    const res = await axios.post("/jobs", {
      company,
      position,
      location,
      date,
      tags,
      desc,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getJobs() {
  try {
    const res = await axios.get("/jobs");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
