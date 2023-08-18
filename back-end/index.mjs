import db from "./db/conn.mjs";
import express from 'express';
import dotenv from 'dotenv';
import cookie from "cookie";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import session from "express-session";
import { StatusCodes } from "http-status-codes";


const config = dotenv.config().parsed;
const app = express();
const port = 8000;
const saltRounds = 10;

app.use(bodyParser.json())

app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  req.username =
    req.session && req.session.username ? req.session.username : null;
  console.log(`HTTP request username: ${req.username} method: ${req.method} url: ${req.url} body: ${req.body}`);
  next();
});



app.get('/', (req, res) => {
  res.send('Hello World!')
});

const isAuthenticated = function (req, res, next) {
  if (!req.username) return res.status(401).end("access denied");
  next();
};


app.post("/sign-up/",  async (req, res, next) => {
  const users = await db.collection("User");
  const username = req.body.username;
  const password = req.body.password;

  if (!password) return res.status(StatusCodes.BAD_REQUEST).end("Enter a valid password");
  if (!username) return res.status(StatusCodes.BAD_REQUEST).end("Enter a username");

  users.findOne({ _id: username })
  .then(user => {
    if (user)
      return res.status(StatusCodes.CONFLICT).end("username " + username + " already exists");
    bcrypt.hash(password, saltRounds)
    .then(hash => {
      {
        users.insertOne(
          { _id: username, password: hash },
        ).then(() => {
          res.setHeader(
          "Set-Cookie",
          cookie.serialize("username", username, {
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
          })
        );
        req.session.username = username;
        return res.json(username);
      })
      }
    })
  })
  .catch(error => {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  })
});

app.post("/sign-in/", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  // retrieve user from the database
  const users = await db.collection("User");
  users.findOne({ _id: username })
  .then((user)=>{
    if (!user) return res.status(StatusCodes.UNAUTHORIZED).end("access denied");
    bcrypt.compare(password, user.password)
    .then(result => {
      if (!result) return res.status(StatusCodes.UNAUTHORIZED).end("access denied");
      // initialize cookie
      console.log("bcrypt yes");
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("username", username, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        })
      );
      req.session.username = username;
      return res.json(username);
    });
  })
  .catch((error) =>  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end(error))
});


app.get("/sign-out/", function (req, res, next) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("username", "", {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week in number of seconds
    })
  );
  req.session.destroy((err) => {
    if (err) return res.status(500).end(err);
  });
  return res.json({});
});

app.post("/needs-auth", isAuthenticated, (req, res, next) =>
{
  return res.status(StatusCodes.ACCEPTED).end("you're authenticated!");
})

app.listen(port, () => {
  console.log(`Money-Mate Backend app listening on port ${port}`)
})
