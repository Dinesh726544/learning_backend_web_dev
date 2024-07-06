import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req,res) => {
  console.log(req.body.street);
  // console.log(req.body.pet);
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
