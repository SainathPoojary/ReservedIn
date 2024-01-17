import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import { compare } from "bcrypt";
const saltRounds = 10;

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;
    console.log(email,password)
    const user = await prisma.user.findFirst({
      where: {
        // @ts-ignore
        email: email,
      },
      select: {
        id: true,
        name: true,
        avatar: true,
        email: true,
        password: true,
        rollno: true,
      },
    });
    
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
      return;
    }
    console.log(email,password, user.password)
    console.log(typeof(user.password))
    console.log(typeof(password))
    
    const isMatch = password === user.password;
    console.log(isMatch)
    if (!isMatch) {
      res.status(400).json({ message: "Wrong Password!" });
      return;
    }

   
    res.status(200).json({ message: "User logged in successfully" ,user:user});
    
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
  switch (method) {
    case "GET":
      break;
    case "POST":
      login(req, res);
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
