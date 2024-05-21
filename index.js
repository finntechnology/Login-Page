import express from "express";
import fs from "fs";

const app = express();
const port = 5000;

import { fileURLToPath } from "url";
import path from "path";
import { loadavg } from "os";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware to display our styles, image and all
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// our default home page
app.get("/", (req, res) => {
  const loginPage = fs.readFileSync("./public/login.html");
  res.status(200);
  res.send(`${loginPage}`);
});

// login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "johndoe@gmail.com" && password === "12346john") {
    res.status(200);
    res.json({ message: "login successful" });
  } else {
    res.status(400);
    res.json({ message: "Oohs! Wrong username and password" });
  }
});

app.listen(port, () => {
  console.log(`my server is connected ${port}`);
});
