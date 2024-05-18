const express = require("express");
const { connectToMongoDB } = require("./connection");
const URL = require("./models/user");
const path = require("path")
const app = express();
const PORT = 8000;
const router = require("./router/url");
const userRouter = require("./router/user");
const staticRouter = require("./router/staticRouter");
const {restrictTouserloginonly} = require("./middlewares/auth");
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));
connectToMongoDB("mongodb://localhost:27017/urlshorthener")
  .then(() => {
    console.log(`MongoDB connected`);
  })
  .catch((err) => {
    console.log(`Error is there.`, err);
  });
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser())
app.use("/URL",restrictTouserloginonly, router);
app.use("/static",staticRouter);
app.use("/signup",userRouter);



app.get("/", async (req, res) => {
  const allurls = await URL.find();
  res.render("pages/index", {
    urls: allurls
  });
})
app.get("/about", (req, res) => {
  res.render("pages/about");
})



app.listen(8000, (req, res) => {
  console.log(`Server is running at PORT ${PORT}`);
});
