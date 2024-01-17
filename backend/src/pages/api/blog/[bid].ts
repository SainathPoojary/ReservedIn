import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import NextCors from 'nextjs-cors';

const getBlogById = async (
  req: NextApiRequest,
  res: NextApiResponse,
  bid: string
) => {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: bid,
      },
    });
    if (!blog) res.status(404).json({ message: "Blog not found" });
    else res.status(200).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  const { bid } = req.query;
  const blogId = bid as string;
  switch (method) {
    case "GET":
      getBlogById(req, res, blogId);
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
