
//custum middleware


import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

const logger = (req,res,next) => {
  console.log("req URL:",req.url);
  console.log("req METHOD:",req.method);
  next()
}

app.use(logger);

app.use(morgan('dev'))


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
