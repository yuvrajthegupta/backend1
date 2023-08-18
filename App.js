import express from "express";
import cors from 'cors';
import { userRoutes } from "./routes/user-routes.js";
// app.use(express.static("public"))
// import { userRoutes } from "./routes/user-routes.js";
const app = express(); //express returning an app (function)
app.use(cors());
app.use(express.static("public"))
app.use(express.json()) //middleware fetching data and perform next
 app.use("/", userRoutes);
// app.use("/", ideRoutes);
app.use("/", (request, response, next) => {
  //404 middleware
  response.json({ message: "invalid url" });
});
/*express is basically using App as an array which contains all the specified routes 
(middlewares) in indexed format (request <-> response)*/
const PORT=process.env.PORT || 1234
const server = app.listen(PORT, (err) => {
  if (err) {
    console.log("server crashed");
    throw err;
  } else {
    console.log("server is running", PORT);
  }
});
