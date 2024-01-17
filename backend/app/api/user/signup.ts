import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import { hash } from "bcrypt";
const saltRounds = 10;

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password, name, avatar, role ,rollno} = req.body;
    console.log(email, password, name, avatar, role,rollno);
    
    
    const user = await prisma.user.findUnique({
      where: {
        // @ts-ignore
        email: email,
      },
    });
    if (user) {
      res.status(400).json({ message: "Email already exist" });
      return;
    }

    const rooll = await prisma.user.findUnique({
      where: {
        // @ts-ignore
        rollno: rollno,
      },
    });

    if(rollno){
      if (rooll) {
        res.status(400).json({ message: "Rollno already exist" });
        return;
      }
    }

    hash(password, saltRounds, async (err, hash) => {
      if (err) {
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: hash,
          name: name,
          avatar: avatar,
          role: role,
          rollno: rollno,
        },
      });
      res.status(200).json(newUser);
    });
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
      signup(req, res);
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
