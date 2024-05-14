const express = require("express");
const { connectToMongoDB } = require("./connection");
const app = express();
const PORT = 8000;
const router = require("./router/url");
connectToMongoDB("mongodb://localhost:27017/urlshorthener")
  .then(() => {
    console.log(`MongoDB connected`);
  })
  .catch((err) => {
    console.log(`Error is there.`, err);
  });
  app.use(express.json());
app.use("/URL", router);


app.listen(8000, (req, res) => {
  console.log(`Server is running at PORT ${PORT}`);
});
