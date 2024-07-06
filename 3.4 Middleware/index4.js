import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/public/index.html");

})

app.post("/submit", (req,res) => {
  // console.log(req.body.street);
  // console.log(req.body.pet);

  const result = `${req.body.street}${req.body.pet}`
  res.send(`<h1>Your band name is:</h1><h2>${result}✌️</h2>`);

  console.log(result);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
