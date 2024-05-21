import express from "express";
const app = express();
const port = 3000;

// app level middleware
app.use((req, res, next) => {
  const date = new Date();
  if (date.getHours() < 11) {
    res.send("<h1>sorry we are closed</h1>");
  } else {
    next();
  }
  //   console.log("<h1>user tried to access our application</h1>");
  //   res.send("<h1>Sorry you cant access this website from your location</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>na my home page be this</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcome to my about page</h1>");
});

app.get("/blog", (req, res) => {
  res.send("<h1>Welcome to my blog page</h1>");
});

// route specific middleware
app.use((req, res, next) => {
  const course = "software development";
  if (course === "software development") {
    next();
  } else {
    res.send("<h1>Sorry you cant access this class</h1>");
  }
});

app.get("/class", (req, res) => {
  res.send("<h1>Welcome to software development</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to my contact page</h1>");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
