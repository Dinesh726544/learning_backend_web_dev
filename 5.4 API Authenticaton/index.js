import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(`${API_URL}/random`);
    const result = response.data;
    console.log(typeof(result));
    res.render("index.ejs", { content: JSON.stringify(result)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    try {
      const response = await axios.get(`${API_URL}/all?page=2`,{
        auth: {
          username: "thecodecrusader",
          password: "12345678",
    }});
      const result = response.data;
      console.log(typeof(result));
      res.render("index.ejs", { content: JSON.stringify(result)});
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        content: error.message,
      });
    }

});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  const apiKeyJsObj = await axios.get(`${API_URL}/generate-api-key`);
  const key = apiKeyJsObj.data.apiKey;
  console.log(key);

  try {
    const response = await axios.get(`${API_URL}/filter?score=5&apiKey=${key}`);
    const result = response.data;
    // console.log((result));
    res.render("index.ejs", { content: JSON.stringify(result)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

//   const apiKeyJsObj = await axios.post(`${API_URL}/get-auth-token`,{
//     auth: {
//       username: "thecodecrusader",
//       password: "12345678",
// }});
//   const token = apiKeyJsObj.data.token;
  // console.log(token);

  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {
      headers: { 
        Authorization: `Bearer 1a7a4957-a5a1-402d-8b89-4e82f9c430e2` 
      },
    });
    const result = response.data;
    // console.log((result));
    res.render("index.ejs", { content: JSON.stringify(result)});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      content: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
