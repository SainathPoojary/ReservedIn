import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const getAllJobs = async (req, res) => {
  try {
      const jobs = await prisma.job.findMany({
      });

    
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// const createJob = async (req, res) => {
//   try {
//     const { title, description, location, salary } = req.body;
//     const job = await prisma.job.create({
//       data: {
//         title,
//         description,
//         location,
//         salary,
//       },
//     });
//     res.status(200).json({ job });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
      getAllJobs(req, res);
      break;
    case "POST":
      break;
    case "PATCH":
      break;
    case "DELETE":
      break;
    default:
      res.status(500).json({ message: "Method not allowed" });
      break;
  }
}
