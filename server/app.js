require("dotenv").config();
require("./config/database").connect();
const cors = require('cors');


const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const User = require("./model/user");
const auth = require("./middleware/auth");

const file = fs.readFileSync(__dirname + '/swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/", (req, res) => {
  res.status(200).send("Server is up and running.\n");
});

app.post("/api/blog", async (req, res) => {
  res.send("Hello World PoSt")

});
app.get("/api/blog", async (req, res) => {
    res.send("Hello World")
});
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, contact, disabilityType, disabilityPercentage, disabilityProof,skills,videoId , pin} = req.body;
    // validate the fields
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // hash user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user in our database
    const user = await User.create({
      name : name,
      password: encryptedPassword,
      email: email.toLowerCase().trim(),
      contact: contact,
      disabilityType: disabilityType,
      disabilityPercentage: disabilityPercentage,
      disabilityProof: disabilityProof,
      skills: skills,
      videoId: videoId,
      pin: pin
    });

    // create token
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    // save user token
    user.token = token;

    // remove user password from response
    user.password = undefined;


    const option = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, option).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // validate the fields
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }

  const user = await User.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    user.password = undefined;
    user.pin = undefined;

    const option = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    return res.status(200).cookie("token", token, option).json(user);
  }

  res.status(400).send("Invalid Credentials");
});

app.get("/video/getId/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user =  await User.findOne({ videoId: id });
    if (!user) return res.status(404).send("User not found");
    user.password = undefined;
    
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}
);

app.get("/dashboard", auth, async (req, res) => {
  const { email } = req.user;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send("Logout success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});





//blogs
const Blog = require("./model/blogs");
const Comment = require("./model/comments");

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}
);

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}
);

app.post("/api/blogs", async (req, res) => {
  try {
    const { authors, index, tags, text, timestamp, title, url, authorImage, authorId, user, comments } = req.body;
    // console.log(a);
    const blog = await Blog.create({
      authors: authors,
      index: index,
      tags: tags,
      text: text,
      timestamp: timestamp,
      title: title,
      url: url,
      authorImage: authorImage,
      authorId: authorId,
      user: user,
      comments: comments
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});


//comments
app.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
}
);

app.post("/api/comments", async (req, res) => {
  try {
    const { comments, sentiment, author, authorImage } = req.body;
    // validate the fields
   
    const comment = await Comment.create(
      {
        text: comments  ,
        sentiment: sentiment,
        author : author,
        authorImage : authorImage
       } );
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).send("Something weasdfnt wrong");
  }
}
);

module.exports = app;
