import express from "express";
import dotenv from "dotenv";

// TODO: LOAD ENV VARIABLES
dotenv.config({ path: "./config/config.env" });

//import middleware
import morgan from "morgan";

//import database config
import { connectDB } from "./config/db.js";

//import routes
import movieRoutes from "./routes/movieRoutes.js";

//connect to database
connectDB();

const app = express();

//development middleware logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routes
app.use("/api/v1/movies", movieRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server running in port ${PORT} in ${process.env.NODE_ENV} environment`
  )
);

//handle unhandled promise rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`unhandled rejection : ${err.message}`);
  //close server exit process
  server.close(() => process.exit(1));
});
